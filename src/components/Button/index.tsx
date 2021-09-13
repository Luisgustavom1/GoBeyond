import React from 'react';

import { Container } from './styles';

interface IButton {
  children: any
  height: number
  width: number
}

const Button = ({ children, height, width }: IButton) => {
  return(
    <Container
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
}

export default Button;