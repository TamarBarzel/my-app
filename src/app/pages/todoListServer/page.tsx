"use client";
import React, { useEffect, useState } from "react";
import { getTodos } from "@/app/services/getUsers";
import Todo from "@/app/types/todo";

export default function TodoListServerPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-6">טוען...</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-10">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
        רשימת מטלות
      </h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-white rounded-md shadow-sm"
          >
            <span className="font-semibold text-gray-600">#{todo.id}</span>
            <span className="text-gray-700">{todo.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
