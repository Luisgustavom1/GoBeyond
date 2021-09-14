import React from 'react';
import Image from 'next/image';
import { Container, NewButton } from './styles';

import shoes from '../../assets/imgs/shoes.svg';
import Button from '../Button';

const Cards = () => {
  return(
    <Container>
      <Image 
        src={shoes} 
        alt='imagem do card'
      />
      <div>
        <h1>Sapato Floater Preto</h1>
        <span>
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </span>
        <p>de R$ 299,00</p>
        <h3>por R$ 259,90</h3>
        <p>ou em 9x de R$ 28,87</p>
      </div>
      <NewButton
        width={125}
        height={33}
      >
        <i className="fab fa-whatsapp" />
        Comprar
      </NewButton>
    </Container>
  );
}

export default Cards;