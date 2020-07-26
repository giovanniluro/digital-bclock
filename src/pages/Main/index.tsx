import React from 'react';
import { Container, Side, Content } from './style';
import Clock from '../../components/Clock';
import NavBar from '../../components/NavBar';

const Main:React.FC = () => {

  return (
    <Container>
      <Side>
        <NavBar />
      </Side>
      <Content>
        <Clock />
      </Content>
    </Container>
  )

}

export default Main;