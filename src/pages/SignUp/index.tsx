import React from 'react';

import { Container, Wrap } from './styles';
import logo from '../../assets/logo.png'

const SignUp: React.FC = () => {
  return(
    <Container>
      <Wrap>
        <img src={logo} alt="Cooperjet" width="100%" />
        <h1>Criar conta</h1>
        <input type='text' name="name" placeholder="Nome" />
        <input type='text' name="email" placeholder="E-mail" />
        <input type='text' name="cel" placeholder="Telefone/Whatsapp" />
        <input type="password" name="senha" placeholder="Senha" />
        <input type="password" name="confirmSenha" placeholder="Confirme sua senha" />
        <button type="submit">Entrar</button>
      </Wrap>
    </Container>
  )
}

export default SignUp;
