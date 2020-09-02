import React from 'react';
import { Form } from '@unform/web';

import { Container, Wrap } from './styles';
import logo from '../../assets/logo.png'
import Input from '../../components/Input'

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }

  return(
    <Container>
      <Wrap>
        <img src={logo} alt="Cooperjet" width="100%" />
        <h1>Criar conta</h1>
        <Form onSubmit={handleSubmit}>
          <Input type='text' name="name" placeholder="Nome" />
          <Input type='text' name="email" placeholder="E-mail" />
          <Input type='text' name="cel" placeholder="Telefone/Whatsapp" />
          <Input type="password" name="senha" placeholder="Senha" />
          <Input type="password" name="confirmSenha" placeholder="Confirme sua senha" />
          <button type="submit">Entrar</button>
        </Form>
      </Wrap>
    </Container>
  )
}

export default SignUp;
