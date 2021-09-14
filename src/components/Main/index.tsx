import React from 'react';
import Cards from '../Cards';

import { Container, Carousel } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
      <article>
        <h1>Mais vendidos</h1>
        <span className='span'></span>
      </article>
      <Carousel>
        <i 
          className="fas fa-chevron-left" 
        ></i>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <i 
          className="fas fa-chevron-right" 
        ></i>
      </Carousel>
    </Container>
  );
}

export default Main;