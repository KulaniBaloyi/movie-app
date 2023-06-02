import Image from 'next/image';
import Link from 'next/link';

const ShowCard = ({ show}) => {
  const imgUrl=`https://image.tmdb.org/t/p/original${show?.backdrop_path}`
  return (
    
    <Link href={`api/tvshows/${show?.id}`} >
      <div className='min-w-[11rem] flex flex-col rounded-md overflow-hidden hover:scale-110 transition duration-500'>
        <div className={`rounded-lg border h-64 grid place-content-center relative `}>
          <p className='z-40 text-white grid place-content-center text-[10px] bg-black/80 rounded-full aspect-square h-10 absolute left-5 -bottom-5'>{show?.vote_average.toFixed(1)}%</p>
          <Image
            src={imgUrl}
            alt={show?.name}
          fill
            className='object-cover h-full w-full  z-10'
          />
        </div>
        <div className='flex-wrap px-4 pt-6'>
          <h2 className='font-semibold'>{show?.name}</h2>
          <h2 className='text-gray-600'>{show?.first_air_date}</h2>
        </div>
      </div>
    </Link>
  );
}

export default ShowCard;