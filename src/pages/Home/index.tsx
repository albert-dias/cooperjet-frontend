import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {  Container,
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
          Campanha,
          CLimitation,
        } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import Gb from '../../assets/clientes/gb.png';
import Suricato from '../../assets/clientes/suricato-2.png';
import SaleBrasa from '../../assets/clientes/salebrasa.png';
import TemakiExpress from '../../assets/clientes/temakiExpress.png';
import bitzBurger from '../../assets/clientes/bitzBurger.png';
import steakHome from '../../assets/clientes/steakHome.png';
import poize from '../../assets/clientes/poize.png';
import pizzariaVitoria from '../../assets/clientes/pizzariaVitoria.png';
import nanaGelateria from '../../assets/clientes/nanaGelateria.png';
import mandok from '../../assets/clientes/mandok.png';
import mamaGourmet from '../../assets/clientes/mamaGourmet.png';
import gillisBurguer from '../../assets/clientes/gillisBurguer.png';
import fatiasPizzaria from '../../assets/clientes/fatiasPizzaria.png';
import donBurger from '../../assets/clientes/donBurger.png';
import curvaInBox from '../../assets/clientes/curvaInBox.png';
import corazon from '../../assets/clientes/corazon.png';
import seuAcaiECia from '../../assets/clientes/seuAcaiECia.png';
import saborDePao from '../../assets/clientes/saborDePao.png';
import pandaPizza from '../../assets/clientes/pandaPizza.png';
import cafeBrigadeiro from '../../assets/clientes/cafeBrigadeiro.png';
import natusCafe from '../../assets/clientes/natusCafe.png';



const Home: React.FC = () => {
  const[isUsers, setIsUsers] = useState();
  const[isQtdAppoitments, setIsQtdAppointments] = useState([]);

  useEffect(() => {
    async function loadData(){
      const response = await api.get('/appointments/datahome');
      console.log(response.data);

      const { qtdAppointments, qtdUsers } = response.data;

      setIsQtdAppointments(qtdAppointments);
      setIsUsers(qtdUsers);
    }

    loadData();
  }, [])

  return(
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
          <h1>AGILIDADE</h1>
          <h3>Trabalho com rapidez, <br />responsabilidade e <br />principalmente qualidade!</h3>
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
            <img src={mandok} alt="Mandok" width="100%" />
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
            <img src={corazon} alt="Corazon" width="100%" />
          </Card>
          <Card>
            <img src={saborDePao} alt="Padaria sabor de pão" width="100%" />
          </Card>
          <Card>
            <img src={pandaPizza} alt="Panda Pizza" width="100%" />
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
          <Feedback>
          <h2>{ isUsers }</h2>
            <strong>Clientes satisfeitos</strong>
            <p>usam nossos serviços com frequência</p>
          </Feedback>
          <Feedback>
            <h2>{isQtdAppoitments}</h2>
            <strong>Ordens de serviço</strong>
            <p>Todas finalizadas com sucesso!</p>
          </Feedback>
          <Feedback>
            <h2>433</h2>
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
      <Footer/>
    </>
  )
}

export default Home;
