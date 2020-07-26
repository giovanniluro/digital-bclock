import React, { useState, useEffect } from 'react';
import Pixel from '../Pixel';
import { Container } from './style';

interface PixeledNumberProps {
  type: string;
}

const PixeledNumber: React.FC<PixeledNumberProps> = ({ type }) => {

  const [model, setModel] = useState<string[]>([]);

  useEffect(() => {
    let formula: () => number;

    switch (type) {
      case 'segundo1':
        formula = () => Math.floor(new Date().getSeconds() / 10);
        break;
      case 'segundo2':
        formula = () => new Date().getSeconds() % 10;
        break;
      case 'minuto1':
        formula = () => Math.floor(new Date().getMinutes() / 10);
        break;
      case 'minuto2':
        formula = () => new Date().getMinutes() % 10;
        break;
      case 'hora1':
        formula = () => Math.floor(new Date().getHours() / 10);
        break;
      case 'hora2':
        formula = () => new Date().getHours() % 10;
        break;
      
    }


    setInterval(() => {
      const number = formula();
      switch (number) {
        case 1:
          setModel([
            'false', 'false', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
          ]);
          break;
        case 2:
          setModel([
            'true', 'true', 'true',
            'false', 'false', 'true',
            'true', 'true', 'true',
            'true', 'false', 'false',
            'true', 'true', 'true',
          ]);
          break;
        case 3:
          setModel([
            'true', 'true', 'true',
            'false', 'false', 'true',
            'true', 'true', 'true',
            'false', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
        case 4:
          setModel([
            'true', 'false', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
          ]);
          break;
        case 5:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'false',
            'true', 'true', 'true',
            'false', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
        case 6:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'false',
            'true', 'true', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
        case 7:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
            'false', 'false', 'true',
          ]);
          break;
        case 8:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
        case 9:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
            'false', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
        case 0:
          setModel([
            'true', 'true', 'true',
            'true', 'false', 'true',
            'true', 'false', 'true',
            'true', 'false', 'true',
            'true', 'true', 'true',
          ]);
          break;
      }

    }, 1000);
  }, [model, type]);

  return (
    <Container>
      {model.map((model, index) => <Pixel key={index} isSetOn={model} />)}
    </Container>
  )

};

export default PixeledNumber;