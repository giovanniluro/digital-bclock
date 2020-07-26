import styled, { css } from 'styled-components';

interface ContainerProps {
  on: string;
}

export const Container = styled.div<ContainerProps>`
  height: 20px;
  width: 20px;
  background: white;
  margin: 3px;

  ${props => props.on === 'true' && css`
    animation: pixel-show .4s linear;
  `}

  ${props => props.on === 'false' && css`
    animation: pixel-hide .3s forwards;
  `}


  @keyframes pixel-show {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pixel-hide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }



`