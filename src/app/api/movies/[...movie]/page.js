"use client"
import { useState, useEffect } from 'react';
// Components
import Crew from '@/app/components/Crew';
import Cast from '@/app/components/Cast';
import Image from 'next/image';

const Page = ({ params }) => {
  const api_key = process.env.API_KEY;
  const url = process.env.BASE_URL;

  // Get ID from URL
  const movieId = params?.movie[0];

  // Store API data in variables
  const [movieData, setMovieData] = useState(null);
  const [credits, setCredits] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the movie details that match the current movie we're on
        const response = await fetch(
          `${url}/movie/${movieId}?api_key=${api_key}`
        );
        if (response.ok) {
          const jsonData = await response.json();
          setMovieData(jsonData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCredits = async () => {
      try {
        // Fetch the movie credits of the movie we're currently on. Includes info about actors/producers etc.
        const response = await fetch(
          `${url}/movie/${movieId}/credits?api_key=${api_key}`
        );
        if (response.ok) {
          const jsonData = await response.json();
          setCredits(jsonData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCredits();
    fetchData();
    // Re-fetch all data every time the ID changes to make sure we have correct data
  }, [movieId]);

  if (!movieData) {
    return <p>Loading movie details...</p>;
  }
  if (!credits) {
    return <p>Loading credit details...</p>;
  }

  const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;

  return (
    <main>
      <section
        className="min-h-[300px] md:min-h-screen w-full p-10 flex gap-10 text-white relative"
        style={{ backgroundImage: `url(${backgroundImageUrl})`, objectFit: 'cover' }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="flex-[.3] w-full rounded-2xl overflow-hidden relative">
          <Image
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt={movieData.title}
            fill
            className="object-cover h-full w-full  z-10"
          />
        </div>
        <div className="hidden md:flex flex-[.7] flex-col z-50">
          <h1 className="text-3xl font-bold">
            {movieData.title}
           
          </h1>
          <div className="flex space-x-4 my-5">
            <h3>{movieData.release_date}</h3>
            {movieData.genres.map(genre => (
              <h3 key={genre.id}>&#x2022;{genre.name}</h3>
            ))}
          </div>
          <div className="flex space-x-4 items-center my-5">
            <p className="bg-gray-800 grid place-content-center p-2 rounded-full font-bold aspect-square h-16 text-yellow-500">
              {movieData.vote_average.toFixed(1)}%
            </p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Play Trailer</p>
            </div>
          </div>
          <div>
            <h2>Overview</h2>
            <p className="my-5 text-lg">{movieData.overview}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Status</h2>
              <h2>{movieData.status}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Revenue</h2>
              <h2>{movieData.revenue}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Budget</h2>
              <h2>{movieData.budget}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Original Language</h2>
              <h2>{movieData.original_language}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className=" md:hidden flex-[.7] flex-col bg-gray-800 text-white p-5">
          <h1 className="text-3xl font-bold">
            {movieData.title}
            <span className="text-gray-600">({movieData.release_date})</span>
          </h1>
          <div className="flex space-x-4 my-5">
            
            {movieData.genres.map(genre => (
              <h3 key={genre.id}>&#x2022;{genre.name}</h3>
            ))}
          </div>
          <div className="flex space-x-4 items-center my-5">
            <p className="bg-yellow-900 grid place-content-center p-2 rounded-full font-bold aspect-square h-16 text-yellow-500">
              {movieData.vote_average.toFixed(1)}%
            </p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Play Trailer</p>
            </div>
          </div>
          <div>
            <h2>Overview</h2>
            <p className="my-5 text-lg">{movieData.overview}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Status</h2>
              <h2>{movieData.status}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Revenue</h2>
              <h2>{movieData.revenue}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Budget</h2>
              <h2>{movieData.budget}</h2>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Original Language</h2>
              <h2>{movieData.original_language}</h2>
            </div>
          </div>
        </section>
      <section className="bg-white p-5 py-10">
        <h2 className="font-bold text-2xl">Top Billed Cast</h2>
        <div className="p-5 min-h-[300px] bg-white flex h-full overflow-x-auto relative">
          <div className="flex space-x-5">
            {credits &&
              credits.cast.map(credit => (
                <Cast key={credit.cast_id} {...credit} />
              ))}
          </div>
        </div>
      </section>
      <section className="bg-white p-5 py-10">
        <h2 className="font-bold text-2xl">Top Crew Cast</h2>
        <div className="p-5 min-h-[300px] bg-white flex h-full overflow-x-auto relative">
          <div className="flex space-x-5">
            {credits &&
              credits.crew.map(crew => (
                <Crew key={crew.id} {...crew} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

