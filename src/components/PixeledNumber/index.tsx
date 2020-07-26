import React, { useState, useEffect } from 'react';
import Pixel from '../Pixel';
import { Container } from './style';

interface PixeledNumberProps {
  number: number;
}

const PixeledNumber: React.FC<PixeledNumberProps> = ({ number }) => {

  const [model, setModel] = useState<string[]>([]);

  useEffect(() => {
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
  }, [number]);

  return (
    <Container>
      {model.map((model, index) => <Pixel key={index} isSetOn={model} />)}
    </Container>
  )

};

export default PixeledNumber;