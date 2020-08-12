import React from 'react';

import { Container, Wrap } from './styles';
import logo from '../../assets/logo.png'

const SignIn: React.FC = () => {
  return(
    <Container>
      <Wrap>
        <img src={logo} alt="Cooperjet" width="100%" />
        <h1>Login</h1>
        <input type='text' name="email" placeholder="E-mail" />
        <input type="password" name="senha" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Wrap>
    </Container>
  )
}

export default SignIn;
