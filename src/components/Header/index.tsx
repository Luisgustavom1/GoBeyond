import React from 'react';
import Image from 'next/image'

import logoImg from '../../assets/imgs/gobeyond_logo_white 1.svg';
import cart from '../../assets/imgs/Minicart.svg';

import { ArticleStyle, AsideStyle, Container, SearchStyle } from './styles';
import NavItem from '../NavItem';

const Header: React.FC = () => {
  const categoria1 = {
    item1: 'categoria1',
    item2: 'categoria1',
    item3: 'categoria1',
    item4: 'categoria1',
    item5: 'categoria1'
  }

  const categoria2 = {
    item1: 'categoria2',
    item2: 'categoria2',
    item3: 'categoria2',
    item4: 'categoria2',
    item5: 'categoria2'
  }
  return(
      <Container>
          <ArticleStyle>
            <Image src={logoImg} alt='logo img'/> 
            <nav>
              <p>Home</p>
              <NavItem items={categoria1}>
                Categoria 1 
              </NavItem>
              <NavItem items={categoria2}>
                Categoria 2 
              </NavItem>
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