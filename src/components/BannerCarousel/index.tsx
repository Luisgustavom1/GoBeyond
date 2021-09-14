import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Container, Carousel } from './styles';

import banner1 from '../../assets/imgs/banner1.svg';
import banner2 from '../../assets/imgs/banner2.jpg';
import banner3 from '../../assets/imgs/banner3.jpg';
import banner4 from '../../assets/imgs/banner4.jpg';

const BannerCarousel: React.FC = () => {

  const [showBanner, setShowBanner] = useState<number>(0);
  
  function nextBanner() {

    if(showBanner === 3) {
      return setShowBanner(0);
    }

    const nextBanner = showBanner + 1;
    setShowBanner(nextBanner);    
    
  }

  function prevBanner() {
    if(showBanner === 0) {
      return setShowBanner(3);
    }

    const nextBanner = showBanner - 1;
    setShowBanner(nextBanner); 
  }

  useEffect(() => {
    var interval = setInterval(() => {
      nextBanner()
    }, 2000);
    return () => clearInterval(interval)
  }, [showBanner])

  return(
    <Container>
      <Carousel bannerSlide={showBanner}>
        <div>
          <Image
              src={banner1}
              alt='banner1'
            />
        </div>
        <div>
          <Image
            src={banner2}
            alt='banner2'
          />
        </div>
        <div>
          <Image
            src={banner3}
            alt='banner3'
          />
        </div>
        <div>
          <Image
            src={banner4}
            alt='banner4'
          />
        </div>
      </Carousel>
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