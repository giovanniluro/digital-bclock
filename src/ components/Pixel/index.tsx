import React, { useState, useEffect } from 'react';
import { Container } from './style';

interface PixelProps {
  isSetOn: string;
} 

const Pixel:React.FC<PixelProps> = ({ isSetOn }) => {

  const [on, setOn] = useState('true');

  useEffect(() => {
    setOn(isSetOn);
  }, [isSetOn]);

  return (
    <Container on={on} />
  )

}

export default Pixel;