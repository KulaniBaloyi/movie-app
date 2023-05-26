import Image from 'next/image';

const Landing = () => {
  return (
    <div className="p-10 min-h-[400px] border max-h-[360px] grid place-content-center landing">
      <div className="gradient-overlay overflow-hidden" />
      <Image
        src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/kf456ZqeC45XTvo6W9pW5clYKfQ.jpg"
        alt="Background Image"
       
        fill
      
        className='object-cover h-full w-full'
      
      />
      <div className="text-white z-40">
            <h2 className='text-5xl font-bold'>Welcome.</h2>
            <h3 className='text-3xl font-semibold my-5'>Millions of movies, TV shows and people to discover. Explore now.</h3>   
      </div>
      <div  className="z-40 rounded-full overflow-hidden bg-white mt-5 flex justify-between">
        <input  type="text" className='text-gray-600 placeholder:text-gray-600 h-full w-full outline-none focus:outline-none p-3 pl-5 text-lg' placeholder="Search for a movie, tv show, person......"/>
        <button className='text-white bg-gradient-to-r from-teal-500 to-blue-500 p-2 px-6 rounded-full font-semibold'>Search</button>
      </div>
     
    </div>
  );
};

export default Landing;