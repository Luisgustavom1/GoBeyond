import React, { ReactNode } from 'react';

import { Container } from './styles';

interface IContainerCarousel {
  children: ReactNode,
  bannerSlide: number,
  rollX: number,
  widthSlides: string,
  height: string
}

const ContainerCarousel = ({ children, bannerSlide, widthSlides, rollX, height }: IContainerCarousel) => {
  return(
    <Container 
      bannerSlide={bannerSlide}
      rollX={rollX}  
      widthSlides={widthSlides}
      height={height}
    >
      {children}
    </Container>
  );
}

export default ContainerCarousel;