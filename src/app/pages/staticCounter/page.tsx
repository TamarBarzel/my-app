'use client'
import React, { useEffect } from 'react'
import useStaticCounter from '@/app/store/staticCounter'

const page = () => {
const{counter,add}= useStaticCounter();
 useEffect(()=>{
    add();
 },[])
 return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-4">Counter</h1>
            <p className="text-6xl font-extrabold text-green-400">{counter}</p>
        </div>
    </div>
);
}

export default page