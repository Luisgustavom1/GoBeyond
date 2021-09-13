import React from 'react';

import { Container, ContainerDropdown, MenuDropdown } from './styles';

interface INavItem {
  children: string
  items: string[]
}

const NavItem = ({ children, items }: INavItem) => {

  return(
    <Container>
      <ContainerDropdown>
        {children} 
        <i className="fas fa-caret-down"
        />
      </ContainerDropdown>
      <MenuDropdown>
        <ul className='dropdown'>
          {items.map((item, id) => {
            return <li key={id}>{item}</li>
          })}
        </ul>
      </MenuDropdown>
    </Container>
  )
}

export default NavItem;