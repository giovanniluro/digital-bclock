import React, { useMemo } from 'react';
import { Container, Regions } from './style';

const NavBar: React.FC = () => {

  const buttons = [
    {
      city: 'São Paulo',
      country: 'Brasil',
      fuse: {
        hour: 0,
        minutes: 0
      }
    },
    {
      city: 'Teste',
      country: 'Teste',
      fuse: {
        hour: 0,
        minutes: 0
      }
    }
  ];

  return (
    <Container>
      <h1>Digital BClock</h1>
      <h3><a href="https://github.com/giovanniluro" target="#">Giovanni Luro</a></h3>
      <h2>Regiões</h2>
      <Regions>
        {buttons.map(button => <button><p>{button.city}</p><span>{button.country}</span></button>)}
      </Regions>

    </Container>
  )

}

export default NavBar;