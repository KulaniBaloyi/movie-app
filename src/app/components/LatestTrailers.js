"use client"
import { useEffect,useState } from "react"
import Card from "./MovieCard"
import Trailer from "./Trailer"

const LatestTrailers = () => {
 
  const [data, setData] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {

        //for tv SHows
        //https://api.themoviedb.org/3/tv/on_the_air?api_key=aa0b34d169414a371fa98f29e584298f

        //get list of all movies now playing        
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=aa0b34d169414a371fa98f29e584298f`);
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
    <div className="p-10 border min-h-[300px]">
    <h1 className="font-bold text-2xl mb-5">Latest Trailers</h1>
    <section className="flex h-full overflow-x-auto relative">
    <div className="flex space-x-5 py-5">
          {/* Render the cards based on the fetched data */}
          {data && data.results && data.results.map(trailer => (
            <Trailer key={trailer.id} trailer={trailer} />
          ))}
        </div>
</section>

</div>
  )
}

export default LatestTrailers