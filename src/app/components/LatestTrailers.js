"use client"

import { useEffect, useState } from "react";
import Trailer from "./Trailer";

const LatestTrailers = () => {
  const [data, setData] = useState("");
  const apiKey = process.env.API_KEY
  const url = process.env.BASE_URL

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${url}/movie/now_playing?api_key=${apiKey}`
        );
        if (res.ok) {
          const jsonData = await res.json();
          setData(jsonData);
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="p-10 border min-h-[300px] hover:bg-black/30 cursor-pointer">
      <h1 className="font-bold text-2xl mb-5">Latest Trailers</h1>
      <section className="flex h-full overflow-x-auto relative">
        <div className="flex space-x-5 py-5 ">
          {/* Render the cards based on the fetched data */}
          {data &&
            data.results &&
            data.results.map((trailer) => (
              <Trailer key={trailer.id} trailer={trailer} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default LatestTrailers;
