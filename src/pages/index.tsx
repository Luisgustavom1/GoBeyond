import type { NextPage } from 'next'
import BannerCarousel from '../components/BannerCarousel'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <> 
      <Header />
      <BannerCarousel />
    </>
  )
}

export default Home
