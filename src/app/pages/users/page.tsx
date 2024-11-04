import React from "react";
import User from "@/app/types/user";
import { getUsers } from "@/app/services/getUsers";
import UserCard from "@/app/components/UserCard";

const page = async () => {
  const users: User[] = await getUsers();
  console.log(users);

  return (
    <div className="grid gap-6 p-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default page;
