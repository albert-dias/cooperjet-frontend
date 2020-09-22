import React, { useCallback, useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';

import MenuDashboard from '../../components/MenuDashboard';
import Footer from '../../components/Footer';
import Logo from '../../assets/logo.png'

import api from '../../services/api'

import { Container, Limitation, GridContainer, Todos, Todo, Row, Cel } from './styles';

interface RequestData{
  id: string;
  sender_id: string;
  sender_name: string;
  sender_address: string;
  sender_number: string;
  sender_complement: string;
  sender_city: string;
  sender_neighborhood: string;
  sender_cel: string;
  sender_note: string;
  recipient_name: string;
  recipient_address: string;
  recipient_number: string;
  recipient_complement: string;
  recipient_city: string;
  recipient_neighborhood: string;
  recipient_cel: string;
  recipient_note: string;
  payment: string;
  price: number;
  number: number;
  status: string;
}

const Dashboard: React.FC = () => {
  const [isAppointments, setIsAppointments] = useState<RequestData[]>([]);

  useEffect(() =>{
    async function loadData(){
      const response = await api.get('/appointments');

      setIsAppointments(response.data)
    }

    loadData();
  },[]);



  const handleSubmit = useCallback((id: string) => {
    const appointmentDoc = isAppointments.filter((appointment) => {
      return appointment.id === id;
    });

    const doc = new jsPDF();
    doc.rect(0, 0, 500, 30, "F");
    doc.addImage(Logo, 'PNG', 70, 5, 63, 21)

    doc.text(`Nº: ${appointmentDoc[0].number}`, 10, 40);
    doc.text(`Valor: R$${appointmentDoc[0].price},00`, 110, 40);

    doc.text(`Retirada`, 10, 50);
    doc.text(`Pagamento: ${appointmentDoc[0].payment}`, 110, 50);

    doc.text(`Nome: ${appointmentDoc[0].sender_name}`, 10, 60);
    doc.text(`Contato: ${appointmentDoc[0].sender_cel}`, 110, 60);

    doc.text(`Endereço: ${appointmentDoc[0].sender_address}`, 10, 70);

    doc.text(`Número: ${appointmentDoc[0].sender_number}`, 10, 80);
    doc.text(`Complemento: ${appointmentDoc[0].sender_complement}`, 60, 80);

    doc.text(`Bairro: ${appointmentDoc[0].sender_neighborhood}`, 10, 90);
    doc.text(`Cidade: ${appointmentDoc[0].sender_city}`, 110, 90);

    appointmentDoc[0].sender_note && doc.text(`Observação: ${appointmentDoc[0].sender_note}`, 10, 100);

    doc.text(`Entrega`, 10, 120);

    doc.text(`Nome: ${appointmentDoc[0].recipient_name}`, 10, 130);
    doc.text(`Contato: ${appointmentDoc[0].recipient_cel}`, 110, 130);

    doc.text(`Endereço: ${appointmentDoc[0].recipient_address}`, 10, 140);

    doc.text(`Número: ${appointmentDoc[0].recipient_number}`, 10, 150);
    doc.text(`Complemento: ${appointmentDoc[0].recipient_complement}`, 60, 150);

    doc.text(`Bairro: ${appointmentDoc[0].recipient_neighborhood}`, 10, 160);
    doc.text(`Cidade: ${appointmentDoc[0].recipient_city}`, 110, 160);

    appointmentDoc[0].recipient_note && doc.text(`Observação: ${appointmentDoc[0].recipient_note}`, 10, 170);

    doc.save(`${appointmentDoc[0].number}.pdf`);


  },[isAppointments])

  return (
    <>
      <MenuDashboard />
      <Container>
        <Limitation>
          <h1>Pedidos</h1>
          <GridContainer>
            <h2 className="Pending">Em aberto</h2>
            <Todos>
              { isAppointments.map(appointment => {
                if(appointment.status === 'open'){
                  return (
                  <Todo key={appointment.id}>
                      <Row>
                        <Cel>
                          <p><strong>Nº: </strong>{appointment.number}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Valor: </strong>R${appointment.price},00</p>
                        </Cel>
                      </Row>
                      <Row>
                        <Cel>
                          <span>Retirada</span>
                        </Cel>
                        <Cel>
                          <p><strong>Pagamento: </strong>{appointment.payment}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Nome:</strong> Jefferson Costa</p>
                        </Cel>
                        <Cel>
                          <p><strong>Contato:</strong> (84) 98765-4321</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>Endereço: </strong>{appointment.sender_address}</p>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Número: </strong>{appointment.sender_number}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Complemento: </strong>{appointment.sender_complement}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Bairro: </strong>{appointment.sender_neighborhood}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Cidade: </strong>{appointment.sender_city}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>OBS:</strong>{appointment.sender_note}</p>
                      </Row>
                      <hr/>
                      <Row>
                        <span>Entrega</span>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Nome: </strong>{appointment.recipient_name}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Contato: </strong>{appointment.recipient_cel}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>Endereço: </strong>{appointment.recipient_address}</p>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Número: </strong>{appointment.recipient_number}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Complemento: </strong>{appointment.recipient_complement}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <Cel>
                          <p><strong>Bairro: </strong>{appointment.recipient_neighborhood}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Cidade: </strong>{appointment.recipient_city}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>OBS: </strong>{appointment.recipient_note}</p>
                      </Row>
                      <Row className="Buttoms">
                        <button className="Cancel" type='submit'>CANCELAR</button>
                        <button className="Confirm" type='submit' onClick={() => handleSubmit(appointment.id)}>CONFIRMAR</button>
                      </Row>
                    </Todo>
                  )}
                })
              }
            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Progress">Em andamento</h2>
            <Todos>
              { isAppointments.map(appointment => {
                if(appointment.status === 'ongoing'){
                  return (
                    <Todo key={appointment.id}>
                      <Row>
                        <Cel>
                          <p><strong>Nº: </strong>{appointment.number}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>Cliente: </strong>{appointment.sender_name}</p>
                      </Row>
                      <Row className="Buttoms">
                        <button className="Cancel" type='submit'>CANCELAR</button>
                        <button className="Confirm" type='submit'>CONFIRMAR</button>
                      </Row>
                    </Todo>
                  )};
                })
              }
            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Success">Finalizados</h2>
            <Todos>
            { isAppointments.map(appointment => {
                if(appointment.status === 'completed'){
                  return (
                    <Todo key={appointment.id}>
                      <Row>
                        <Cel>
                          <p><strong>Nº: </strong>{appointment.number}</p>
                        </Cel>
                        <Cel>
                          <p><strong>Valor: </strong>R${appointment.price},00</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>Cliente: </strong>{appointment.sender_name}</p>
                      </Row>
                    </Todo>
                  )};
                })
              }
            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Canceled">Cancelados</h2>
            <Todos>
            { isAppointments.map(appointment => {
                if(appointment.status === 'canceled'){
                  return (
                    <Todo key={appointment.id}>
                      <Row>
                        <Cel>
                          <p><strong>Nº: </strong>{appointment.number}</p>
                        </Cel>
                      </Row>
                      <Row>
                        <p><strong>Cliente: </strong>{appointment.sender_name}</p>
                      </Row>
                    </Todo>
                  )};
                })
              }
            </Todos>
          </GridContainer>
        </Limitation>
      </Container>
      <Footer/>
    </>
  );
}

export default Dashboard;
