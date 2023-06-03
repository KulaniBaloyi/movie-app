import Image from "next/image"

const Cast = ({cast_id,profile_path,name,character}) => {
  const fallbackImage = '/user-placeholder.jpg';
  return (
    <div key={cast_id} className='rounded-md  cursor-pointer w-36 border my-4 mb-12' >
             <Image
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt={name}
            width={150}
            height={150}
            // onError={(e) => {
            //   //e.target.onerror = null
            //   e.target.src = fallbackImage 
            // }}
          

            className='object-cover h-full w-full z-10'
          />
            <p className='text-gray-800 text-sm font-bold'>{name}</p>
            <p className='text-gray-500 text-xs'>{character}</p>
           </div>
  )
}

export default Cast