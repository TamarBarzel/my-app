"use client";
import React from "react";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { getTasks } from "@/app/services/getUsers";
import Task from '@/app/types/task'

export default function QueryPage() {
  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery<Task[],Error>({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error:{error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <ul className="list-disc pl-5">
        {tasks?.map((task) => (
          <li key={task.id} className="mb-2">
            {task.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
