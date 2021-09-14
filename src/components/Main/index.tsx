import React from 'react';
import Cards from '../Cards';

import { Container, Carousel } from './styles';
import ContainerCarousel from '../CarouselContainer';

const Main: React.FC = () => {
  return(
    <Container>
      <div>
        <h1>Mais vendidos</h1>
        <span className='span'></span>
      </div>
      <Carousel>
        <ContainerCarousel
          height={''}
          widthSlides={''}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </ContainerCarousel>
      </Carousel>
    </Container>
  );
}

export default Main;