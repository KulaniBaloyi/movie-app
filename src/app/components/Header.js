"use client"

import SearchIcon from "./SearchIcon"

const Header = () => {
  return (
    <header className="bg-[rgba(3,37,65)] text-white p-5 px-10 flex items-center justify-between">
        <div className="flex items-center space-x-5">
            <h1 className="font-bold text-3xl gradient-text">TMDB</h1>
            <ul className="flex space-x-5">
                <li>Movies</li>
                <li>TV Shows</li>
                <li>People</li>
                <li>More</li>
            </ul>
        </div>
        <ul className="flex space-x-5">
            <li>EN</li>
            <li><SearchIcon/></li>
        </ul>
    </header>
  )
}

export default Header