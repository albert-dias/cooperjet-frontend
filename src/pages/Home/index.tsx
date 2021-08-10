import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Limitation,
  Companies,
  CardsGrid,
  Card,
  Section,
  Feedback,
  Feedbacks,
  PillarsSection,
  Pillars,
  PillarCard,
  Transition,
} from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import Gb from '../../assets/clients/1.png';
import Suricato from '../../assets/clients/2.png';
import SaleBrasa from '../../assets/clients/3.png';
import TemakiExpress from '../../assets/clients/4.png';
import bitzBurger from '../../assets/clients/5.png';
import steakHome from '../../assets/clients/6.png';
import poize from '../../assets/clients/7.png';
import pizzariaVitoria from '../../assets/clients/8.png';
import nanaGelateria from '../../assets/clients/9.png';
import rafa from '../../assets/clients/10.png';
import mamaGourmet from '../../assets/clients/11.png';
import gillisBurguer from '../../assets/clients/12.png';
import fatiasPizzaria from '../../assets/clients/13.png';
import donBurger from '../../assets/clients/14.png';
import curvaInBox from '../../assets/clients/15.png';
import pinPizza from '../../assets/clients/16.png';
import seuAcaiECia from '../../assets/clients/17.png';
import saborDePao from '../../assets/clients/18.png';
import mariaPitanga from '../../assets/clients/19.png';
import cafeBrigadeiro from '../../assets/clients/20.png';
import natusCafe from '../../assets/clients/21.png';



const Home: React.FC = () => {
  const [isUsers, setIsUsers] = useState<number>();
  const [isQtdAppoitments, setIsQtdAppointments] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/appointments/datahome');
      console.log(response.data);

      const { qtdAppointments, qtdUsers } = response.data;

      setIsQtdAppointments(qtdAppointments);
      setIsUsers(qtdUsers);
    }

    loadData();
  }, [])

  return (
    <>
      <Menu />
      {/* <Campanha>
        <CLimitation>
          <h1>Ganhe dinheiro fazendo entregas</h1>
          <span>Aceitou, entregou, ganhou!</span>
        </CLimitation>
      </Campanha> */}
      <Container>
        <Limitation>
          <h1>Para sua empresa!</h1>
          <h3>Entregas inteligentes de<br />uma forma rápida<br />e prática!</h3>
        </Limitation>
      </Container>
      <Companies>
        <h1>Nossos clientes</h1>
        <CardsGrid>
          <Card>
            <img src={Suricato} alt="Suricato Pizzaria" width="100%" />
          </Card>
          <Card>
            <img src={SaleBrasa} alt="Sal e Brasa" width="100%" />
          </Card>
          <Card>
            <img src={TemakiExpress} alt="Temaki Express" width="100%" />
          </Card>
          <Card>
            <img src={Gb} alt="Gourmet Burger" width="100%" />
          </Card>
          <Card>
            <img src={bitzBurger} alt="Bitz Burger" width="100%" />
          </Card>
          <Card>
            <img src={steakHome} alt="Steak Home" width="100%" />
          </Card>
          <Card>
            <img src={poize} alt="Poizé bar e petiscaria" width="100%" />
          </Card>
          <Card>
            <img src={pizzariaVitoria} alt="Pizzaria Vitória" width="100%" />
          </Card>
          <Card>
            <img src={nanaGelateria} alt="Nana Gelateria" width="100%" />
          </Card>
          <Card>
            <img src={rafa} alt="Pastelaria do Rafa" width="100%" />
          </Card>
          <Card>
            <img src={mamaGourmet} alt="Mama Gourmet" width="100%" />
          </Card>
          <Card>
            <img src={gillisBurguer} alt="Gilli's Burger" width="100%" />
          </Card>
          <Card>
            <img src={fatiasPizzaria} alt="Fatias Pizzaria" width="100%" />
          </Card>
          <Card>
            <img src={donBurger} alt="Don Burger" width="100%" />
          </Card>
          <Card>
            <img src={curvaInBox} alt="Curva in Box" width="100%" />
          </Card>
          <Card>
            <img src={seuAcaiECia} alt="Seu açai e cia" width="100%" />
          </Card>
          <Card>
            <img src={pinPizza} alt="Pin Pizzaria" width="100%" />
          </Card>
          <Card>
            <img src={saborDePao} alt="Padaria sabor de pão" width="100%" />
          </Card>
          <Card>
            <img src={mariaPitanga} alt="Maria Pitanga " width="100%" />
          </Card>
          <Card>
            <img src={natusCafe} alt="Natus Café" width="100%" />
          </Card>
          <Card>
            <img src={cafeBrigadeiro} alt="Café Brigadeiro" width="100%" />
          </Card>
        </CardsGrid>
      </Companies>
      <Transition />
      <Section>
        <Feedbacks>
          <h1>Ser Cooperjet é ser diferente!</h1>
          <Feedback>
            <h2>{isUsers && isUsers + 323}</h2>
            <strong>Clientes satisfeitos</strong>
            <p>usam nossos serviços com frequência</p>
          </Feedback>
          <Feedback>
            <h2>{528 + Number(isQtdAppoitments)}</h2>
            <strong>Ordens de serviço</strong>
            <p>Todas finalizadas com sucesso!</p>
          </Feedback>
          <Feedback>
            <h2>{isUsers && isUsers + 291}</h2>
            <strong>Nos recomendam</strong>
            <p>melhorando a cada dia</p>
          </Feedback>
        </Feedbacks>
      </Section>
      <PillarsSection>
        <Pillars>
          <h1>Nossos valores</h1>
          <PillarCard>
            <strong>Agilidade</strong>
            <p>Focandos em entregas rádipas pra melhor atende-los</p>
          </PillarCard>
          <PillarCard>
            <strong>Qualidade</strong>
            <p>Motoboys capacitados para facilitar o seu trabalho</p>
          </PillarCard>
          <PillarCard>
            <strong>Estratégia</strong>
            <p>Buscando sempre as melhores rotas da região</p>
          </PillarCard>
          <PillarCard>
            <strong>Satisfatoriedade</strong>
            <p>Nossa prioridade é deixar nossos clientes satisfeitos</p>
          </PillarCard>
        </Pillars>
      </PillarsSection>
      <Footer />
    </>
  )
}

export default Home;
