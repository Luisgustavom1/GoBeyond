import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const NewsLatter: React.FC = () => {
  return(
    <Container>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <span>
        <input 
          placeholder='Digite seu nome'
          type='text'
        />
        <input 
          placeholder='Digite seu email'
          type='text'
        />
        <Button
          width={140}
          height={48}
        >
          Eu Quero!
        </Button>
      </span>
    </Container>
  );
}

export default NewsLatter;