import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  color: #E7ECEF;
  background: #24282D;
  padding: 20px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 8px;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: rgba(255,159,29, 0.6);
    font-weight: normal;
    transition: .3s;

    &:hover {
      color: rgba(255,159,29, 0.9);
    }
  }

  h1:after {
    content: '';
    position: absolute;
    bottom: -4px;
    height: 2px;
    width: 120%;
    background: #FF9F1C;
  }

  /* Mobile */
  @media(max-width: 700px) {
    padding: 10px 5px;
    border-radius: 0;
  }
`;

export const Regions = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  button {
    padding: 3px;

    p {
      font-weight: bold;
    }

    span {
      font-size: 12px;
    }
  }

  /* Mobile */
  @media(max-width: 700px) {
    margin-bottom: 40px;
  }

`