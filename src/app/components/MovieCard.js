import Image from 'next/image';
import Link from 'next/link';

const Card = ({ movie }) => {
  return (
    <Link href={`api/movie/${movie.id}`} >
      <div className='min-w-[11rem] flex flex-col'>
        <div className={`rounded-lg border h-64 grid place-content-center relative group`}>
          <p className='z-40 text-white grid place-content-center text-[10px] bg-black/80 rounded-full aspect-square h-10 absolute left-5 -bottom-5'>{movie?.vote_average.toFixed(1)}%</p>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title}
          fill
            // objectFit='cover'
            className='object-cover h-full w-full transition group-hover:scale-110 z-10'
          />
        </div>
        <div className='flex-wrap px-4 pt-6'>
          <h2 className='font-semibold'>{movie?.original_title}</h2>
          <h2 className='text-gray-600'>{movie?.release_date}</h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
