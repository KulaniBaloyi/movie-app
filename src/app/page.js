//Components
import Cover from './components/Landing'
import Trending from './components/Trending'
import LatestTrailers from './components/LatestTrailers'
import WhatsPopular from './components/WhatsPopular'


export default function Home() {
  return (
    <main>
      <Cover/>
      <Trending/>
      <LatestTrailers/>
      <WhatsPopular/>
     
    </main>
  )
}
