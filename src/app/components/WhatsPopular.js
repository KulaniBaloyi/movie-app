"use client"
import { useState,useEffect } from "react";
import Card from "./MovieCard"

const WhatsPopular = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=aa0b34d169414a371fa98f29e584298f`);
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    //console.log('popular Today:', data);
  }, [data]);

  return (
    <div className="p-10 border min-h-[300px]">
    <h1 className="font-bold text-2xl mb-5">WhatsPopular</h1>
    <section className="flex h-full overflow-x-auto relative">
    <div className="flex space-x-5 py-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(movie => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </section>

</div>
  )
}

export default WhatsPopular