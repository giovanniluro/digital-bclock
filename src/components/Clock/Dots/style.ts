import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    height: 20px;
    width: 20px;
    background: rgba(255,159,29, 0.7);
    animation: blink 2s infinite ;
     & + div {
        animation: blink 2s infinite reverse;
      }
  }

  @media(max-width: 1000px) {
    flex-direction: row;
    div {
      height: 4px;
      width: 70px;
      background: rgba(255,159,29, 1);
      animation: none;
      &+div {
        animation: none;
      }
    }
  }

  @keyframes blink {
    from { 
      transform: translateY(0);
    }
    50%{
      transform: translateY(20%);
    } to {
      transform: translateY(0);
    }

  }
`