import React from "react";
import PostView from "@/app/types/post";
import { getUser } from "@/app/services/getUsers";
import UserCard from "@/app/components/UserCard";

const page = async (props: PostView) => {
  const user = await getUser(props.params.postId);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="max-w-md w-full">
        <UserCard user={user} showButton={false} />
      </div>
    </div>
  );
};

export default page;
