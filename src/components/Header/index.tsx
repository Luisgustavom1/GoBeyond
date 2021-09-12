import React from 'react';
import Image from 'next/image'

import logoImg from '../../assets/imgs/gobeyond_logo_white 1.svg';
import cart from '../../assets/imgs/Minicart.svg';

import { ArticleStyle, AsideStyle, Container, SearchStyle } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <ArticleStyle>
            <Image src={logoImg} alt='logo img'/> 
            <nav>
              <p>Home</p>
              <p>Categoria 1</p>
              <p>Categoria 2</p>
              <p>Contato</p>
            </nav>
          </ArticleStyle>
          <AsideStyle>
            <SearchStyle>
              <input placeholder='O que está procurando'/>
              <i className="fas fa-search" />  
            </SearchStyle>
            <div>
              <i className="fas fa-user" />
              <p>Minha Conta</p>
            </div>
            <Image src={cart} alt='logo mini cart'/>
          </AsideStyle>
      </Container>
  );
}

export default Header;