"use client"
import { useMovieApp } from "../context/MovieAppContext"
import Link from "next/link"
import { useState,useEffect } from "react"

const Header = () => {
  const [moviesMenu,setMoviesMenu] = useState(false)
  const [tvShowsMenu,setTVshowsMenu] = useState(false)
 

  return (
    <header className="bg-[rgba(3,37,65)] text-white  p-5 px-10 flex items-center justify-between">
        <div className="flex items-center space-x-5">
            <Link href='/' className="font-bold text-3xl gradient-text">TMDB</Link>
            <ul className="flex space-x-5">
                <li onClick={()=>setMoviesMenu(!moviesMenu)} className=" cursor-pointer hover:text-teal-500 ">Movies
                {moviesMenu&&<ul className="bg-white text-gray-800 rounded-md shadow-sm shadow-black p-3 top-16 z-50 left-32 absolute flex flex-col sapce-y-3">
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/movies/popular'}>Popular</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/movies/nowplaying'}>Now Playing</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/movies/upcoming'}>Upcoming</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/movies/toprated'}>Top Rated</Link></li>
                </ul>}
                
                </li>
                <li onClick={()=>setTVshowsMenu(!tvShowsMenu)} className=" cursor-pointer hover:text-teal-500 overflow-visible">TV Shows
                {tvShowsMenu&&<ul className=" bg-white text-gray-800  rounded-md shadow-sm shadow-black p-3 top-16 z-50 left-56 absolute flex flex-col sapce-y-3">
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/tvshows/popular'}>Popular</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/tvshows/airingtoday'}>Airing Today</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/tvshows/ontv'}>On TV</Link></li>
                  <li className="cursor-pointer hover:text-blue-500"><Link href={'api/tvshows/toprated'}>Top Rated</Link></li>
                </ul>}
                
                </li>
                
            </ul>
        </div>
        <ul className="flex space-x-5">
            <li className="cursor-pointer">EN</li>
        </ul>
    </header>
  )
}

export default Header