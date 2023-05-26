"use client"
import { useState, useEffect } from "react";

const Trailer = ({ trailer }) => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=aa0b34d169414a371fa98f29e584298f`
          );
          if (res.ok) {
            const jsonData = await res.json();
            setData(jsonData);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [id]);

  useEffect(() => {
    setId(trailer.id);
  }, [trailer]);

  return (
    <>
      {data && data.results && data.results.length > 0 && (
        <div  className="transition rounded-md overflow-hidden hover:scale-110">
          <iframe
          
            width="300"
            height="168.75"
            src={`https://www.youtube.com/embed/${data.results[0].key}`}
            title="Trailer"
            allowFullScreen
           
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Trailer;

