import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #1B1E22;
  display: flex;

  /* Web */
  @media (min-width: 699px) {
    height: 100vh;
  }

  /* Mobile */
  @media (max-width: 700px) {
    flex-direction: column;
  }

`;

export const Side = styled.aside`
  width: 30%;
  height: 100%;
  padding: 40px 20px;

  /* Mobile */
  @media (max-width: 700px) {
    width: 100%;
    padding: 20px 5px;
  }

`

export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Mobile */
  @media (max-width: 700px) {
    width: 100%;
  }
`