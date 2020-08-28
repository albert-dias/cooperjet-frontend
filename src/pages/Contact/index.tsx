import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { Container, Limitation, Form, Section, Wrapper2 } from './styles';

import Call from '../../assets/contact.png';
import Motoboy from '../../assets/motoboyContact.png';

const Contact: React.FC = () => {
  return (
    <>
      <Menu/>
      <Container>
        <Limitation>
          <img src={Call} alt="Contato"/>
          <Form>
            <h1>Fale conosco</h1>
            <input type="text" name="name" id="name" placeholder="Nome"/>
            <input type="email" name="email" id="email" placeholder="E-mail"/>
            <input type="tel" name="cel" id="cel" placeholder="Telefone / Whatsapp"/>
            <textarea name="message" id="message" placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </Form>
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
