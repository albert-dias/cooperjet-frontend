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
            <p>&nbsp;&nbsp;&nbsp;Uma empresa criada ao perceber a necessidade de nossa cidade no serviço de delivery com entregas rápidas e de qualidade.</p>
            <p>&nbsp;&nbsp;&nbsp;Buscando sempre a melhor forma para atender nossos clientes, desde a fundação prestando um trabalho de excelência, fundada no ano de 2018 inicialmente com 2 motoboy, a Cooperjet hoje conta com mais de 200 profissionais capacitatos.</p>

          </RightBox>
        </Limitation>
        <Limitation>
          <LeftBox>
            <h1>Cooperjet</h1>

            <p>&nbsp;&nbsp;&nbsp;ESomos uma empresa especializada em coletas e entregas com urgência em Natal e região. Nossos Motoboys são capacitados e estão preparados para atender aos seus pedidos.</p>
            <p>&nbsp;&nbsp;&nbsp;Cooperjet esta a mais de 2 anos no mercado de entregas rápidas atuando com coleta e entregas de documentos e pequenas encomendas, efetuando também compras, pagamentos, serviços cartorários, bancários e despachos aéreos. Nossa matriz esta instalada em Nova Parnamirim com filial e Parnamirim e brevemente em Macaíba, utilizamos software e aplicativos que nos permite monitorar em tempo real nossa equipe.
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
              title="Endereço Matriz">
            </iframe>
            <p><strong>Matriz: </strong>R. Peroba, 55A, Nova Parnamirim, Natal - RN </p>
            <p><strong>Telefone: </strong>(84) 98880-6878 / 2010-6394</p>
          </LeftBox>
          <LeftBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.484972609231!2d-35.261383885935025!3d-5.927673559962874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2577582317ba7%3A0xd99926b9426c710d!2sR.%20Gov.%20Juvenal%20Lamartine%2C%20566c%20-%20Boa%20Esperan%C3%A7a%2C%20Parnamirim%20-%20RN%2C%2059140-360!5e0!3m2!1spt-BR!2sbr!4v1603074193289!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              title="Endereço filial">
            </iframe>
            <p><strong>Filial: </strong>R. Governador Juvenal Lamartine, 566b - Boa Esperança, Zona Leste, Parnamirim - RN</p>
            <p><strong>Telefone: </strong>(84) 3272-1763</p>
          </LeftBox>
        </Limitation>
      </Container>
      <Footer />
    </>
  )
}

export default About;
