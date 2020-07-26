import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #080708;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;