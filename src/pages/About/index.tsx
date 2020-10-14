import React from 'react';
import { Container, Limitation, RightBox, LeftBox} from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import ImageD from '../../assets/img1.png';
import ImageE from '../../assets/img2.png';


const About: React.FC = () => {
  return(
    <>
      <Menu/>
      <Container>
        <Limitation>
        <img src={ImageE} alt="Imagem lado esquerdo" width="100%" />
          <RightBox>
            <h1>Nossa história</h1>
            <p>&nbsp;&nbsp;&nbsp;Uma empresa criada ao visar a necessidade de nossa cidade em entregas rápidas e de qualidade.</p>
            <p>&nbsp;&nbsp;&nbsp;Buscando sempre a melhor forma para atender nossos clientes, desde a fundação prestando um trabalho de excelência, fundada no ano de 2014 inicialmente com 5 motoboy, hoje contamos com mais de 200 porfissionais. </p>
          </RightBox>
        </Limitation>
        <Limitation>
          <LeftBox>
            <h1>Cooperjet</h1>

            <p>&nbsp;&nbsp;&nbsp;Empresa especializada em coletas e entregas com urgência em Natal e região. Nossos Motoboys são capacitados e estão preparados para atender aos seus pedidos.</p>
            <p>&nbsp;&nbsp;&nbsp;Cooperjet esta a mais de 4 anos no mercado de entregas rápidas atuando com coleta e entregas de documentos e pequenas encomendas, efetuando também compras, pagamentos, serviços cartorários, bancários e despachos aéreos. Nossa matriz esta instalada em Nova Parnamirim com filial e Parnamirim e brevemente em Macaíba, utilizamos software e aplicativos que nos permite monitorar em tempo real nossa equipe.
              Atualmente atendemos com motoboy toda Natal e região, entregamos com moto até 250 km de Natal; </p>
            <p>&nbsp;&nbsp;&nbsp;Nossos Motoboy estão capacitados para atender sua necessidade no menor tempo possivel e com atendimento exclusivo.</p>
          </LeftBox>
          <img src={ImageD} alt="Imagem lado direito" width="100%" />
        </Limitation>
        <Limitation>
          <LeftBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.751626075929!2d-35.19770378590387!3d-5.890478095732441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2f8bf29b8980f%3A0x19912d09de2ff6f5!2sR.%20Peroba%2C%2055%20-%20Nova%20Parnamirim%2C%20Parnamirim%20-%20RN%2C%2059152-050!5e0!3m2!1spt-BR!2sbr!4v1600398061205!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              title="Endereço base">
            </iframe>
            <p><strong>Matriz: </strong>R. Peroba, 55A, Nova Parnamirim, Natal - RN </p>
            <p><strong>Telefone: </strong>(84)987654321 / 3214-1234</p>
          </LeftBox>
          <LeftBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.751626075929!2d-35.19770378590387!3d-5.890478095732441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2f8bf29b8980f%3A0x19912d09de2ff6f5!2sR.%20Peroba%2C%2055%20-%20Nova%20Parnamirim%2C%20Parnamirim%20-%20RN%2C%2059152-050!5e0!3m2!1spt-BR!2sbr!4v1600398061205!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              title="Endereço base">
            </iframe>
            <p><strong>Matriz: </strong>R. Peroba, 55A, Nova Parnamirim, Natal - RN </p>
            <p><strong>Telefone: </strong>(84)987654321 / 3214-1234</p>
          </LeftBox>
        </Limitation>
      </Container>
      <Footer />
    </>
  )
}

export default About;
