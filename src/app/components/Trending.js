"use client"

import Card from "./Card"

const Trending = () => {
  return (
    <div className="p-10 border min-h-[300px] stripes bg-white">
        <h1 className="font-bold text-2xl mb-5">Trending</h1>
        <section className="flex h-full overflow-x-auto relative">
    <div className="flex space-x-5 py-5">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
</section>

    </div>
  )
}

export default Trending