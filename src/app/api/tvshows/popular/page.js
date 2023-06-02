"use client"
import { useState,useEffect } from "react";
//components
import ShowCard from "@/app/components/TvShowCard";
import Pagination from "@/app/components/Pagination";
import { useMovieApp } from "@/app/context/MovieAppContext";

const Page = () => {
  const [data, setData] = useState('');
  const {page,setPage} = useMovieApp()

  const api_key= process.env.API_KEY
  const url = process.env.BASE_URL
  useEffect(() => {
    const getData = async () => {
      try {
        //get all popular tv shows
        const res = await fetch(`${url}/tv/popular?api_key=${api_key}&page=${page}`,{cache:'no-store'});
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getData()
    //re-fetch the data if page changes
  }, [page]);

  useEffect(() => {
  
  }, [data]);
  useEffect(()=>{
    setPage(1)
  },[])

  return (
  
    <div className="p-10 border bg-white">
      <h1 className="font-bold text-3xl mb-5">Popular TV Shows</h1>
      <section className="">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-6  w-full items-center gap-5">
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


export default Page