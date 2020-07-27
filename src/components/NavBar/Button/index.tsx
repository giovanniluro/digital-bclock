import React from 'react';
import { Container } from './style';

export interface ButtonProps {
  index: number;
  current: number;
}

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({current, index, children, ...rest}) => {

  return (
    <Container {...rest}  index={index} current={current}>
      {children}
    </Container>
  )

}

export default Button;