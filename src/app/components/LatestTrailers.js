"use client"
import Card from "./Card"
import Trailer from "./Trailer"

const LatestTrailers = () => {
  const video =true
  return (
    <div className="p-10 border min-h-[300px]">
    <h1 className="font-bold text-2xl mb-5">Latest Trailers</h1>
    <section className="flex h-full overflow-x-auto relative">
<div className="flex space-x-5 py-5">
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   <Trailer/>
   
</div>
</section>

</div>
  )
}

export default LatestTrailers