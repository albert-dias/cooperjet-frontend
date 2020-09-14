import React, {useCallback, useRef} from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidadionErrors from '../../utils/getValidationErros'

import { Container, Wrap } from './styles';
import logo from '../../assets/logo.png'
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast';

interface SignInFormData{
  email: string;
  pass: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try{
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        pass: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        pass: data.pass,
      });


    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errors= getValidadionErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    }
  }, [signIn, addToast]);

  return(
    <Container>
      <Wrap>
        <img src={logo} alt="Cooperjet" width="100%" />
        <h1>Login</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type='text' name="email" placeholder="E-mail" />
          <Input type="password" name="pass" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </Form>

        <Link to="/cadastro">Quero me cadastrar</Link>
      </Wrap>
    </Container>
  )
}

export default SignIn;
