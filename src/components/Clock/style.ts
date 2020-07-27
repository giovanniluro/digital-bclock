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
  
  > div {
    display: flex;
    
    /* Mobile */
    @media (max-width: 700px) {
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

`