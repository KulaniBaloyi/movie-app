import React from 'react'

const Card = () => {
    
  return (
    <>
   <div className='w-44 flex flex-col'>
        <div className={` rounded-lg border h-64 grid place-content-center relative`}>
            <p className='bg-black/80 rounded-full aspect-square h-10 absolute left-5 -bottom-5'></p>
            Image
        </div>
        <div className='flex-wrap px-4 pt-6'>
            <h2 className='font-semibold '>John Wick: Chapter 4</h2>
            <h2 className='text-gray-600'>Mar 22, 2023</h2>
        </div>
    </div>
    
    </>
  )
}

export default Card