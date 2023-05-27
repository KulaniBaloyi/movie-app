"use client"
import Trailer from '@/app/components/Trailer'
import Cast from '@/app/components/Cast'
// import { useRouter } from 'next/router';
const Page = () => {
//  const router = useRouter()
  // const id = router?.query.id || '';
  // console.log('ROUTER: ',id)
 
  return (
    <>
     <section className='min-h-screen border border-purple-600 p-8 grid grid-cols-3 gap-10 '>
      <div className='rounded-md overflow-hidden col-span-1 border border-red-700 h-full bg-black/30'>
        <div className='h-[90%] bg-green-400/60'></div>
       <div className='h-[10%] bg-blue-400/60'></div>
      </div>
      {/**Render information about the movie */}
      <div className='col-span-2 border border-orange-500 h-full'>
        <h1>Sonic The Hedgehog 2 (2022)</h1>
        <h2>4/01/2022 (ZA) Action, Adventure, Family, Comedy 2h 2m</h2>
        <div>Like Button etc </div>
        <h2>Welcome to the next level!</h2>
        <h2>Overview</h2>
        <p>After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.</p>
        <div>Screen Play Shenanigans</div>
      </div>
    </section>
    <section className='border border-purple-600 p-8 grid grid-cols-4 grid-rows-2 gap-4 '>
       {/**Render information about the cast */}
  <div className='h-full w-full py-5 col-span-3 flex space-x-5 overflow-x-auto '>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>
    <Cast/>

  </div>
   {/**Render information about the production i.e cost,location etc. */}
  <div className='h-full w-full bg-white col-span-1 rounded-md flex flex-col space-y-5 shadow-md p-4 shadow-gray-400'>
    <div>
      <h2 className='font-semibold'>Status</h2>
      <h2>Released</h2>
    </div>
    <div>
      <h2 className='font-semibold'>Original Language</h2>
      <h2>English</h2>
    </div>
    <div>
      <h2 className='font-semibold'>Budget</h2>
      <h2>$863,756,051.01</h2>
    </div>
    <div >
      <h2>KeyWords</h2>
      <div className='flex-wrap flex gap-4 lowercase text-sm'>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>Sequel</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>Super Hero</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>based on comic</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>misfit</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>Space</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>aftercreditsstinger</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>beforecreditsstinger</h2>
      <h2 className='p-1 px-2 rounded-md bg-gray-300'>marvel cinematic universe (mcu)</h2>
      </div>
    </div>
  </div>
</section>

    </>
   
  )
}
export default Page