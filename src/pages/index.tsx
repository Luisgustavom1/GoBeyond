import type { NextPage } from 'next'
import BannerCarousel from '../components/BannerCarousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NewsLatter from '../components/NewsLatter'

const Home: NextPage = () => {
  return (
    <> 
      <Header />
      <BannerCarousel />
      <NewsLatter />
      <Footer /> 
    </>
  )
}

export default Home
