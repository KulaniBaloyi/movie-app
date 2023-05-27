"use client"

import { useEffect,useState } from "react"

useEffect

export default function Pagination ({page,setPage}) {
 

   const handleDecrease =()=>{
   
    setPage((prev)=>prev-1)
   }

   const handleIncrease =()=>{
    setPage((prev)=>prev+1)
   }


  return (
    <div className="  flex justify-center my-5 mt-10 p-5">
        <div className="flex space-x-5 items-center">
        {page>1&&<svg onClick={()=>handleDecrease()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800 cursor-pointer hover:text-teal-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>}

            <p className="border-2 border-teal-500 rounded-md bg-gray-800 text-white p-2 w-10 h-10 grid place-content-center aspect-square">{page}</p>
          
            
            <svg onClick={()=>handleIncrease()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-800 cursor-pointer  hover:text-teal-500">
                <path stroke-Linecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
        </div>
    </div>
  )
}

