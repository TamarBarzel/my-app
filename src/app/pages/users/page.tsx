import React from "react";
import User from "@/app/types/user";
import { getUsers } from "@/app/services/getUsers";
import UserCard from "@/app/components/UserCard";

const page = async () => {
  const users: User[] = await getUsers();
  console.log(users);

  return (
    <div className="grid sm:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default page;
