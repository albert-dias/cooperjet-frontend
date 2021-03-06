import styled from 'styled-components';

import bgCity from '../../assets/bg_auth.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${bgCity}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 90vh;
  /*/#00377B*/
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width:540px;
  align-items: center;
  justify-content: center;

  h1{
    color: #FF5100;
    font-size:20px;
    margin: 40px 0;
  }

  button {
    height: 40px;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 18px;
    width: 100%;
    border: none;
    background-color: #FF5100;
    color: #fff;
  }

  a{
    color: #fff;
    font-family: Ubuntu;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.4s;
  }

  a:hover{
    color: #FF5100;
  }
`;
