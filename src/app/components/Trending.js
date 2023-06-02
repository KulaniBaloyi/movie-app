"use client"
import { useState, useEffect } from "react";
import Card from "./MovieCard";

const Trending = () => {
  const [data, setData] = useState('');
const api_key =process.env.API_KEY
const url = process.env.BASE_URL
  useEffect(() => {
    const getData = async () => {
      try {
        
        const res = await fetch(`${url}/trending/movie/day?api_key=${api_key}`);
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

  }, [data]);

  return (
  
    <div className="p-10 border min-h-[300px] bg-white">
      <h1 className="font-bold text-2xl mb-5">Trending</h1>
      <section className="flex h-full relative">
        <div className="flex space-x-5 py-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(movie => (
            <Card key={movie.id} {...movie}/>
          ))}
        </div>
      </section>
    </div>
    
    
    
  );
}

export default Trending;
