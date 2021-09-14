import React from 'react';
import Cards from '../Cards';

import { Container } from './styles';

const Main: React.FC = () => {
  return(
    <Container>
      <div>
        <h1>Mais vendidos</h1>
        <span></span>
      </div>
      <Cards />
    </Container>
  );
}

export default Main;