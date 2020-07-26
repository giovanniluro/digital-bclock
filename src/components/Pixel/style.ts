import styled, { css } from 'styled-components';

interface ContainerProps {
  on: string;
}

export const Container = styled.div<ContainerProps>`
  height: 20px;
  width: 20px;
  background: #E7ECEF;
  margin: 2px;

  ${props => props.on === 'true' && css`
    animation: pixel-show .4s ease-in-out;
  `}

  ${props => props.on === 'false' && css`
    animation: pixel-hide .3s forwards;
  `}


  @keyframes pixel-show {
    from {
      transform: translate(-8px, -8px) scale(0.7);
    }
    to {
      transform: translate(0,0) scale(1);
      
    }
  }

  @keyframes pixel-hide {
    from {
      opacity: 1;
      transform: translate(0px, 0px);
    }
    to {
      opacity: 0;

      transform: translate(10px, 10px);
    }
  }



`