import React from 'react'
import PostView from '@/app/types/post';
import { getUser } from "@/app/services/getUsers";
import UserCard from '@/app/components/UserCard';

const page = async(props:PostView) => {
    const user = await getUser(props.params.postId);
  
    return (
    <div className=''>
        <UserCard 
          user={user}
          showButton={false}
        />
    </div>
  )
}

export default page