import React from "react";
import User from "@/app/types/user";
import Image from "next/image";
import Link from "next/link";

interface UserCardProps {
  user: User;
  showButton?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, showButton = true }) => {
  return (
    <div className="border-solid p-4 rounded shadow ">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-full h-32 object-cover rounded"
        width={500}
        height={128}
      />
      <h3 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-gray-600">Age: {user.age}</p>
      {!showButton && (
        <>
          <p className="text-gray-400 mb-2">Gender: {user.gender}</p>
          <p className="text-gray-400 mb-2">Email: {user.email}</p>
        </>
      )}
      {showButton && (
        <Link href={`/pages/users/${user.id}`}>
          <button className="mt-2 bg-slate-500 w-full text-white py-2 px-4 rounded hover:bg-slate-600">
            View Details
          </button>
        </Link>
      )}
    </div>
  );
};

export default UserCard;
