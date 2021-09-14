import React from 'react';

import { ButtonStyle } from './styles';

interface IButton {
  children: any
  height: number
  width: number
}

const Button = ({ children, height, width }: IButton) => {
  return(
    <ButtonStyle
      width={width}
      height={height}
    >
      {children}
    </ButtonStyle>
  );
}

export default Button;