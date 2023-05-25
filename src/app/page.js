import Image from 'next/image'
import Cover from './components/Landing'
import Trending from './components/Trending'
import LatestTrailers from './components/LatestTrailers'
import WhatsPopular from './components/WhatsPopular'
import FreeToWatch from './components/FreeToWatch'

export default function Home() {
  return (
    <main>
      <Cover/>
      <Trending/>
      <LatestTrailers/>
      <WhatsPopular/>
      <FreeToWatch/>
    </main>
  )
}
