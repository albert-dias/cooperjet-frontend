import React, {useCallback, useRef} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidadionErrors from '../../utils/getValidationErros';
import api from '../../services/api';

import { Container, Wrap } from './styles';
import logo from '../../assets/logo.png';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  let history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  interface SignUpFormData{
    email: string;
    pass: string;
    name: string;
    cel: string;
  }
  const signUp = useCallback(async ({ email, pass, cel, name, }) => {
    await api.post('users', {
      email,
      pass,
      cel,
      name,
      permission: "user"
    });
  },[])

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try{
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        cel: Yup.string().required('Telefone obrigatório'),
        pass: Yup.string().min(6, 'No mínimo 6 digitos '),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signUp({
        email: data.email,
        pass: data.pass,
        cel: data.cel,
        name: data.name,
      })

      await signIn({
        email: data.email,
        pass: data.pass,
      });

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Bem vindo à cooperjet',
      });

      history.goBack();

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const errors= getValidadionErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao fazer cadastro, entre em contato com o suporte',
      });
    }

  }, [signIn, addToast, history, signUp]);

  return(
    <Container>
      <Wrap>
        <img src={logo} alt="Cooperjet" width="100%" />
        <h1>Criar conta</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type='text' name="name" placeholder="Nome" />
          <Input type='text' name="email" placeholder="E-mail" />
          <Input type='text' name="cel" placeholder="Telefone/Whatsapp" />
          <Input type="password" name="pass" placeholder="Senha" />
          <button type="submit">Cadastrar</button>
        </Form>
        <Link to="/login">Já sou cadastrado</Link>
      </Wrap>
    </Container>
  )
}

export default SignUp;
