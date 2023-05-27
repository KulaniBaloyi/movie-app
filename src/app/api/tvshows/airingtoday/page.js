"use client"
import { useState,useEffect } from "react";
import ShowCard from "@/app/components/TvShowCard";
import Pagination from "@/app/components/Pagination";
const page = () => {
  const [data, setData] = useState('');
  const [page,setPage] = useState(1)

  useEffect(() => {
    const getData = async () => {
      try {
        
        const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=aa0b34d169414a371fa98f29e584298f&page=${page}`);
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, [page]);

  useEffect(() => {
    // console.log('Trending Today:', data);
  }, [data]);

  return (
  
    <div className="p-10 border bg-white">
      <h1 className="font-bold text-3xl mb-5">TV Shows Airing Today</h1>
      <section className="">
        <div className="grid grid-cols-5 gap-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(show => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </section>
      <Pagination page={page} setPage={setPage}/>
    </div>
    
    
    
  );
}


export default page