import React from 'react';
import Image from 'next/image'

import logoImg from '../../assets/imgs/gobeyond_logo_white 1.svg';
import cart from '../../assets/imgs/Minicart.svg';

import { Container, SearchStyle } from './styles';
import NavItem from '../NavItem';

const Header: React.FC = () => {
  const categoria1 = ['categoria1', 'categoria1', 'categoria1', 'categoria1', 'categoria1']

  const categoria2 = ['categoria2', 'categoria2', 'categoria2', 'categoria2', 'categoria2']

  return(
      <Container>
        <Image 
          src={logoImg} 
          alt='logo img'
          width={135}
          height={50}  
          layout='fixed'
        /> 
        <nav>
          <p>Home</p>
          <NavItem 
            items={categoria1}
          >
            Categoria 1 
          </NavItem>
          <NavItem 
            items={categoria2}
          >
            Categoria 2 
          </NavItem>
          <p>Contato</p>
        </nav>
        <SearchStyle>
          <input placeholder='O que está procurando'/>
          <i className="fas fa-search" />  
        </SearchStyle>
        <div>
          <i className="fas fa-user" />
          <p>Minha Conta</p>
        </div>
        <Image src={cart} alt='logo mini cart'/>
      </Container>
  );
}

export default Header;