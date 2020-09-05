import React from 'react';
import {Form} from '@unform/web'

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import { Container, Limitation, ContentForm, Section, Wrapper2 } from './styles';

import Call from '../../assets/contact.png';
import Motoboy from '../../assets/motoboyContact.png';

const Contact: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }
  return (
    <>
      <Menu/>
      <Container>
        <Limitation>
          <img src={Call} alt="Contato"/>
          <ContentForm>
            <h1>Fale conosco</h1>
            <Form onSubmit={handleSubmit}>
              <Input type="text" name="name" id="name" placeholder="Nome"/>
              <Input type="email" name="email" id="email" placeholder="E-mail"/>
              <Input type="tel" name="cel" id="cel" placeholder="Telefone / Whatsapp"/>
              <TextArea name="message" id="message" placeholder="Mensagem"></TextArea>
              <button type="submit">Enviar</button>
            </Form>
          </ContentForm>
        </Limitation>
      </Container>
      <Section>
        <Wrapper2>
          <h2>Descomplique! Chame a Cooperjet.</h2>
          <p>Rápido, fácil e de confiança</p>
          <p>Praticidade sobre duas rodas. Pediu? Chegou!</p>
        </Wrapper2>
        <img src={Motoboy} alt="Motoboy"/>
      </Section>
      <Footer/>
    </>
  );
}

export default Contact;
