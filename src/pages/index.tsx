import type { NextPage } from 'next'
import BannerCarousel from '../components/BannerCarousel'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import NewsLatter from '../components/NewsLatter'

const Home: NextPage = () => {
  return (
    <> 
      <Header />
      <BannerCarousel />
      <Main />
      <NewsLatter />
      <Footer /> 
    </>
  )
}

export default Home
