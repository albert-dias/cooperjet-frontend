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
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
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
      </Container>
      <Footer />
    </>
  )
}

export default About;
