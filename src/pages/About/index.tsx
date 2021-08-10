import React from 'react';
import { Container, Limitation, RightBox, LeftBox } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import ImageD from '../../assets/img1.png';
import ImageE from '../../assets/img2.png';


const About: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <Limitation>
          <img src={ImageE} alt="Imagem lado esquerdo" width="100%" />
          <RightBox>
            <h1>Cooperjet</h1>

            <p>&nbsp;&nbsp;&nbsp;Fundada em Abril de 2018, a Cooperjet surgiu para criar um serviço de entregas que facilitasse a vida de seus clientes. Atualmente, a Cooperjet opera em Natal e toda grande Natal com mais de 500 entregadores parceiros.
              Por meio de aplicativos móveis e do nosso site, a Cooperjet  ajuda usuários a transportar o que importa, conectando-os a entregadores parceiros ao redor do mundo de forma simples e transparente.
              Nossos entregadores parceiros operam vários tipos de veículos, como carretos e utilitários, e fazem entregas de itens vários tamanhos. Motos também estão disponíveis, oferecendo soluções de entrega rápidas e de baixo custo.</p>

          </RightBox>
        </Limitation>
        <Limitation>
          <LeftBox>
            <h2>Entregas Inteligentes e práticas</h2>

            <p>&nbsp;&nbsp;&nbsp;A Cooperjet se tornou o parceiro estratégico de empresas de todos os tamanhos para resolver seus problemas de entrega de última milha. Desde lojas a grandes restaurantes, redes de varejo e comércios eletrônicos, a Cooperjet ajuda empresas de uma ampla variedade de mercados a entregar seus produtos de acordo com suas necessidades.
              Graças ao nosso serviço de entrega no mesmo dia e funcionalidades como o rastreamento do pedido em tempo real, as empresas não precisam mais investir na operação e manutenção de frotas internas.
              Além disso, você pode pagar pelos pedidos por meio da nossa carteira virtual e receber recibos digitais por e-mail. Clientes corporativos têm ainda suporte diferenciado e condições especiais de pagamento. Será um prazer contribuir para o sucesso da sua empresa!</p>
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
            <p><strong>Filial: </strong>R. Peroba, 55A, Nova Parnamirim, Natal - RN </p>
            <p><strong>Telefone: </strong>(84) 98880-6878 / 2010-6394</p>
          </LeftBox>
          <LeftBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.484972609231!2d-35.261383885935025!3d-5.927673559962874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2577582317ba7%3A0xd99926b9426c710d!2sR.%20Gov.%20Juvenal%20Lamartine%2C%20566c%20-%20Boa%20Esperan%C3%A7a%2C%20Parnamirim%20-%20RN%2C%2059140-360!5e0!3m2!1spt-BR!2sbr!4v1603074193289!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              title="Endereço filial">
            </iframe>
            <p><strong>Matriz: </strong>R. Governador Juvenal Lamartine, 566b - Boa Esperança, Zona Leste, Parnamirim - RN</p>
            <p><strong>Telefone: </strong>(84) 3272-1763</p>
          </LeftBox>
        </Limitation>
      </Container>
      <Footer />
    </>
  )
}

export default About;
