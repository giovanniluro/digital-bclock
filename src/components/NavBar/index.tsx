import React, { useState } from 'react';
import { Container, Regions } from './style';
import { Timezone } from '../../pages/Main';
import Button from './Button';

interface NavBarProps {
  setTimezone: (timezone: Timezone) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setTimezone }) => {

  const buttons = [
    {
      city: 'São Paulo',
      country: 'Brasil',
      fuse: {
        hours: 0,
        minutes: 0
      }
    },
    {
      city: 'Caracas',
      country: 'Venezuela',
      fuse: {
        hours: -1,
        minutes: 0
      }
    },
    {
      city: 'Los Angeles',
      country: 'EUA',
      fuse: {
        hours: -4,
        minutes: 0
      }
    },
    {
      city: 'Nova Iorque',
      country: 'EUA',
      fuse: {
        hours: -1,
        minutes: 0
      }
    },
    {
      city: 'Chicago',
      country: 'EUA',
      fuse: {
        hours: -2,
        minutes: 0
      }
    },
    {
      city: 'Bancoque',
      country: 'Tailândia',
      fuse: {
        hours: 10,
        minutes: 0
      }
    },
    {
      city: 'Estocolmo',
      country: 'Suécia',
      fuse: {
        hours: 5,
        minutes: 0
      }
    },
    {
      city: 'Moscou',
      country: 'Rússia',
      fuse: {
        hours: 6,
        minutes: 0
      }
    },
    {
      city: 'Lima',
      country: 'Peru',
      fuse: {
        hours: -2,
        minutes: 0
      }
    },
    {
      city: 'Tijuana',
      country: 'México',
      fuse: {
        hours: -4,
        minutes: 0
      }
    },
    {
      city: 'Tóquio',
      country: 'Japão',
      fuse: {
        hours: 12,
        minutes: 0
      }
    },
    {
      city: 'Roma',
      country: 'Itália',
      fuse: {
        hours: 5,
        minutes: 0
      }
    },
    {
      city: 'Calcutá',
      country: 'India',
      fuse: {
        hours: 8,
        minutes: 30
      }
    },
    {
      city: 'Budapeste',
      country: 'Hungria',
      fuse: {
        hours: 5,
        minutes: 0
      }
    },
    {
      city: 'Atenas',
      country: 'Grécia',
      fuse: {
        hours: 6,
        minutes: 0
      }
    },
    {
      city: 'Paris',
      country: 'França',
      fuse: {
        hours: 5,
        minutes: 0
      }
    },
    {
      city: 'Buenos Aires',
      country: 'Argentina',
      fuse: {
        hours: 0,
        minutes: 0
      }
    },
    {
      city: 'Madrid',
      country: 'Espanha',
      fuse: {
        hours: 5,
        minutes: 0
      }
    },
  ];

  const [selectedButton, setSelectedButton] = useState<number>(0);

  return (
    <Container>
      <h1>Digital BClock</h1>
      <h3><a href="https://github.com/giovanniluro" target="#">Giovanni Luro</a></h3>
      <h2>Regiões</h2>
      <Regions>
        {buttons.map((button, index) =>
          <Button index={index} current={selectedButton} key={index} onClick={() => {setTimezone(buttons[index].fuse); setSelectedButton(index)}}>
            <p>{button.city}</p><span>{button.country}</span>
          </Button>)}
      </Regions>

    </Container>
  )

}

export default NavBar;