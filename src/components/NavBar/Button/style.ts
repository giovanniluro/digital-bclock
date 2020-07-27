import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Container = styled.button<ButtonProps>`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;

  ${props => props.current === props.index && css`
    &:after{
      content: '';
      position: absolute;
      bottom: 1px;
      height: 4px;
      background: rgba(255,159,29, 0.7);
      width: 90%;
      animation: show-line .6s cubic-bezier(.75, 0, .24, 1); 

    }
  `}

  @keyframes show-line {
    from {
      width: 0%;
    } to {
      width: 90%;
    }
  }

`