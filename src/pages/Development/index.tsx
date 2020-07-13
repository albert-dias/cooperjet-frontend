import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png'

const Development: React.FC = () => {
  return(
    <Container>
      <img src={logo} alt="Cooperjet" width="70%" />
      <h1>em desenvolvimento</h1>
    </Container>
  )
}

export default Development;
