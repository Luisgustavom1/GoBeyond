import React from 'react';

import { Container, MenuDropdown } from './styles';

interface INavItem {
  children: string
  items: {
    item1: string, 
    item2: string, 
    item3: string, 
    item4: string, 
    item5: string, 
  }
}

const NavItem = ({ children }: INavItem) => {
  return(
    <>
      <Container>
        {children} <i className="fas fa-caret-down" />
      </Container>
      <MenuDropdown>
        
      </MenuDropdown>
    </>
  )
}

export default NavItem;