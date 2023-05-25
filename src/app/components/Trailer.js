

import React from 'react'

const Trailer = () => {
  return (
    <div className=' flex flex-col w-[300px]'>
        <div className={` rounded-lg border w-[300px] h-[calc(300px/1.78)] grid place-content-center`}>
           
            Trailer Video Playing...
        </div>
        <div className='flex-wrap px-4 pt-6'>
            <h2 className='font-semibold '>Trailer Title</h2>
            <h2 className='text-gray-600'>Virupaksha Official Trailer | Sai Dharam Tej, Samyuktha | Netflix India</h2>
        </div>
    </div>
  )
}

export default Trailer