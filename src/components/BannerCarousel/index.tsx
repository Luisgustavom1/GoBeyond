import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

import banner from '../../assets/imgs/Mask Group.svg';


const BannerCarousel: React.FC = () => {
  return(
    <Container>
      <Image src={banner}/>

      <i className="fas fa-chevron-left"></i>

      <aside>
        <p>
          Olá, você quer fazer entrar de cabeça em desenvolvimento?
        </p>
        <h3>
          front-end • back-end • mobile
        </h3>
      </aside>

      <i className="fas fa-chevron-right"></i>
    </Container>
  );
}

export default BannerCarousel;