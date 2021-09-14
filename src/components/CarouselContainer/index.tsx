import React, { ReactNode } from 'react';

import { Container } from './styles';

interface IContainerCarousel {
  children: ReactNode,
  bannerSlide: number,
  rollX: number,
  widthSlidesVW: number
}

const ContainerCarousel = ({ children, bannerSlide, widthSlidesVW, rollX }: IContainerCarousel) => {
  return(
    <Container 
      bannerSlide={bannerSlide}
      rollX={rollX}  
      widthSlidesVW={widthSlidesVW}
    >
      {children}
    </Container>
  );
}

export default ContainerCarousel;