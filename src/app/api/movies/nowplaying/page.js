"use client"

import { useState,useEffect } from "react"
//Components
import Card from "@/app/components/MovieCard"
import Pagination from "@/app/components/Pagination"
import { useMovieApp } from "@/app/context/MovieAppContext"

const Page = () => {
  const [data, setData] = useState('');
  const {page,setPage} = useMovieApp()

  const api_Key = process.env.API_KEY
  const url = process.env.BASE_URL
  

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch all movies playing now
        const res = await fetch(`${url}/movie/now_playing?api_key=${api_Key }&page=${page}`);
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    getData();
    //because we have pagination. We want to refetch data everytime the page changes
  }, [page]);

  useEffect(() => {
   
  }, [data]);

  useEffect(()=>{
    setPage(1)
  },[])

  return (
  
    <div className="p-10 border bg-white">
      <h1 className="font-bold text-3xl mb-5">Now Playing Movies</h1>
      <section className="">
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  xl:grid-cols-6  w-full items-center gap-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(movie => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </section>
     <Pagination page={page} setPage={setPage}/>
    </div>
    
    
    
  );
}


export default Page