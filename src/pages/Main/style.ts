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


  /* Primeira quebra de layout */
  @media(max-width: 1099px){
    width: 50%;
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 100%;
    padding: 0; 
  }

`

export const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Primeira quebra de layout */
  @media(max-width: 1099px){
    width: 50%;
    padding: 40px 20px;
  }
    
  /* Mobile */
  @media (max-width: 700px) {
    width: 100%;
  }
`