import styled from 'styled-components';

export const Section = styled.div`
  margin: 15px;
  display: flex;
`

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #24282D;
  box-shadow: 0 0 4px 7px rgba(255,159,29, 1); 
  padding: 20px 0;
  margin: 0 15%;
  border-radius: 12px;
  
  > div {
    display: flex;

    /* Mobile */
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center; 
    }
  }

  h1 {
    color: #E7ECEF;
    text-align: center;
    border-bottom: 10px;
    font-size: 20px;
  }

  /* Mobile */
  @media (max-width: 700px) {
    margin-top: 20px;
    width: 100%;
  }
   

  /* Primeira quebra de layout */
  @media(max-width: 1099px){
    margin: 0;
    width: 90%;
  }
    

`