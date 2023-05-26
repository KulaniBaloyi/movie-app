import React from 'react'

const Cast = () => {
  return (
    <div className='min-w-[11rem] flex flex-col border rounded-md overflow-hidden'>
        <div className={`border   h-64 grid place-content-center w-full`}>
           
            Image
        </div>
        <div className='flex-wrap px-4 pt-6 w-full'>
            <h2 className='font-semibold text-sm '>Actor Name Real Name</h2>
            <h2 className='text-gray-600 text-sm'>The Characters name in the bloody movie</h2>
        </div>
    </div>
  )
}

export default Cast