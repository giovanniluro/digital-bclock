import React, { useState } from 'react';
import { Container, Side, Content } from './style';
import Clock from '../../components/Clock';
import NavBar from '../../components/NavBar';

export interface Timezone {
    hours: number;
    minutes: number;
}

const Main:React.FC = () => {

  const [timezone, setTimezone] = useState<Timezone>({hours: 0, minutes: 0});

  return (
    <Container>
      <Side>
        <NavBar setTimezone={setTimezone} />
      </Side>
      <Content>
        <Clock timezone={timezone} />
      </Content>
    </Container>
  )

}

export default Main;