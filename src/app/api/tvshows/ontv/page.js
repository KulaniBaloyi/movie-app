"use client"
import { useState,useEffect } from "react";
import ShowCard from "@/app/components/TvShowCard";
const page = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        
        const res = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=aa0b34d169414a371fa98f29e584298f`);
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
    // console.log('Trending Today:', data);
  }, [data]);

  return (
  
    <div className="p-10 border bg-white">
      <h1 className="font-bold text-2xl mb-5">On TV</h1>
      <section className="">
        <div className="grid grid-cols-5 gap-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </section>
      <div className="bg-green-400 text-center text-white p-3">Pagination</div>
    </div>
    
    
    
  );
}


export default page