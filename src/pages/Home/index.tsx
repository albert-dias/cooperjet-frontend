import React, { useCallback, useEffect, useState } from 'react';
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
        } from './styles';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Gb from '../../assets/gb.png';
import Suricato from '../../assets/suricato-2.png';
import SaleBrasa from '../../assets/salebrasa.png';
import oMexicano from '../../assets/omexicano.png';

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
            <img src={Suricato} alt="suricato" width="100%" />
          </Card>
          <Card>
            <img src={SaleBrasa} alt="salebrasa" width="100%" />
          </Card>
          <Card>
            <img src={oMexicano} alt="o mexicano" width="100%" />
          </Card>
          <Card>
            <img src={Gb} alt="gb" width="100%" />
          </Card>
          <Card>
            <img src={Suricato} alt="suricato" width="100%" />
          </Card>
          <Card>
            <img src={SaleBrasa} alt="salebrasa" width="100%" />
          </Card>
          <Card>
            <img src={oMexicano} alt="o mexicano" width="100%" />
          </Card>
          <Card>
            <img src={Gb} alt="gb" width="100%" />
          </Card>
          <Card>
            <img src={Suricato} alt="suricato" width="100%" />
          </Card>
          <Card>
            <img src={SaleBrasa} alt="salebrasa" width="100%" />
          </Card>
          <Card>
            <img src={oMexicano} alt="o mexicano" width="100%" />
          </Card>
          <Card>
            <img src={Gb} alt="gb" width="100%" />
          </Card><Card>
            <img src={Suricato} alt="suricato" width="100%" />
          </Card>
          <Card>
            <img src={SaleBrasa} alt="salebrasa" width="100%" />
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
