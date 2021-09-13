import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Container } from './styles';

import banner1 from '../../assets/imgs/banner1.svg';
import banner2 from '../../assets/imgs/banner2.jpg';
import banner3 from '../../assets/imgs/banner3.jpg';
import banner4 from '../../assets/imgs/banner4.jpg';

const BannerCarousel: React.FC = () => {

  const [showBanner, setShowBanner] = useState<boolean[]>([true, false, false, false]);
  
  const currentBanner = showBanner.indexOf(true)

  function nextBanner() {
    const showBannerUpdate = [...showBanner]

    if(currentBanner === showBanner.length - 1) {
      showBannerUpdate[0] = true;
      showBannerUpdate[currentBanner] = false
      setShowBanner(showBannerUpdate)
      return
    }

    showBannerUpdate[currentBanner] = false;
    showBannerUpdate[currentBanner + 1] = true;

    setShowBanner(showBannerUpdate)
  }

  function prevBanner() {
    const showBannerUpdate = [...showBanner]

    if(currentBanner === 0) {
      showBannerUpdate[0] = false;
      showBannerUpdate[showBanner.length - 1] = true
      setShowBanner(showBannerUpdate)
      return
    }

    showBannerUpdate[currentBanner] = false;
    showBannerUpdate[currentBanner - 1] = true;

    setShowBanner(showBannerUpdate)
  }

  // useEffect(() => {
  //   var interval = setInterval(() => {
  //     nextBanner()
  //   }, 2000);
  //   return () => clearInterval(interval)
  // }, [])

  return(
    <Container>
        {showBanner[0] && <Image 
          src={banner1}
          alt='banner1'
        />}
        {showBanner[1] && <Image 
          src={banner2}
          alt='banner2'
        />}
        {showBanner[2] && <Image 
          src={banner3}
          alt='banner3'
        />}
        {showBanner[3] && <Image 
          src={banner4}
          alt='banner4'
        />}
      <article>
        <i 
          className="fas fa-chevron-left" 
          onClick={() => prevBanner()}></i>
        <aside>
          <p>
            Olá, você quer fazer entrar de cabeça em desenvolvimento?
          </p>
          <h3>
            front-end • back-end • mobile
          </h3>
        </aside>
        <i 
          className="fas fa-chevron-right"
          onClick={() => nextBanner()}></i>
      </article>
    </Container>
  );
}

export default BannerCarousel;