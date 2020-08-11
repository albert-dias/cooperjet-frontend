import styled from 'styled-components';

import bgCity from '../../assets/bg_auth.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background: url(${bgCity}) no-repeat center;
  background-size: cover;

  h1{
    color: #fff;
    font-size:20px;
  }

`;
