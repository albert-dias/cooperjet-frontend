import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


import { Container, Limitation, GridContainer, Todos, Todo, Row, Cel } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <Limitation>
          <h1>Pedidos</h1>
          <GridContainer>
            <h2 className="Pending">Em aberto</h2>
            <Todos>
              <Todo key="1">
                <Row>
                  <Cel>
                    <p><strong>Nº:</strong> 0101</p>
                  </Cel>
                  <Cel>
                    <p><strong>Valor:</strong> 0101</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <span>Retirada</span>
                  </Cel>
                  <Cel>
                    <p><strong>Pagamento:</strong> receber na entrega</p>
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
                  <p><strong>Endereço:</strong> Rua das embarcações</p>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Número:</strong> 07</p>
                  </Cel>
                  <Cel>
                    <p><strong>Complemento:</strong> apto 207 torre b</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Bairro:</strong> Lagoa Nova</p>
                  </Cel>
                  <Cel>
                    <p><strong>Cidade:</strong> Natal</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Complemento:</strong>Já esta liberado na portaria </p>
                </Row>
                <hr/>
                <Row>
                  <span>Entrega</span>
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
                  <p><strong>Endereço:</strong> Rua das embarcações</p>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Número:</strong> 07</p>
                  </Cel>
                  <Cel>
                    <p><strong>Complemento:</strong> apto 207 torre b</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Bairro:</strong> Lagoa Nova</p>
                  </Cel>
                  <Cel>
                    <p><strong>Cidade:</strong> Natal</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Complemento:</strong>Já esta liberado na portaria </p>
                </Row>
                <Row className="Buttoms">
                  <button className="Cancel" type='submit'>CANCELAR</button>
                  <button className="Confirm" type='submit'>CONFIRMAR</button>
                </Row>
              </Todo>

              <Todo key="2">
                <Row>
                  <Cel>
                    <p><strong>Nº:</strong> 0101</p>
                  </Cel>
                  <Cel>
                    <p><strong>Valor:</strong> 0101</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <span>Retirada</span>
                  </Cel>
                  <Cel>
                    <p><strong>Pagamento:</strong> receber na entrega</p>
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
                  <p><strong>Endereço:</strong> Rua das embarcações</p>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Número:</strong> 07</p>
                  </Cel>
                  <Cel>
                    <p><strong>Complemento:</strong> apto 207 torre b</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Bairro:</strong> Lagoa Nova</p>
                  </Cel>
                  <Cel>
                    <p><strong>Cidade:</strong> Natal</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Complemento:</strong>Já esta liberado na portaria </p>
                </Row>
                <hr/>
                <Row>
                  <span>Entrega</span>
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
                  <p><strong>Endereço:</strong> Rua das embarcações</p>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Número:</strong> 07</p>
                  </Cel>
                  <Cel>
                    <p><strong>Complemento:</strong> apto 207 torre b</p>
                  </Cel>
                </Row>
                <Row>
                  <Cel>
                    <p><strong>Bairro:</strong> Lagoa Nova</p>
                  </Cel>
                  <Cel>
                    <p><strong>Cidade:</strong> Natal</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Complemento:</strong>Já esta liberado na portaria </p>
                </Row>
                <Row className="Buttoms">
                  <button className="Cancel" type='submit'>CANCELAR</button>
                  <button className="Confirm" type='submit'>CONFIRMAR</button>
                </Row>
              </Todo>

            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Progress">Em andamento</h2>
            <Todos>
              <Todo key="1">
                <Row>
                  <Cel>
                    <p><strong>Nº:</strong> 0101</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Motoboy:</strong> Rua das embarcações</p>
                </Row>
                <Row className="Buttoms">
                  <button className="Cancel" type='submit'>CANCELAR</button>
                  <button className="Confirm" type='submit'>CONFIRMAR</button>
                </Row>
              </Todo>
            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Success">Finalizados</h2>
            <Todos>
              <Todo key="1">
                <Row>
                  <Cel>
                    <p><strong>Nº:</strong> 0101</p>
                  </Cel>
                  <Cel>
                    <p><strong>Valor:</strong> 0101</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Motoboy:</strong> Rua das embarcações</p>
                </Row>
              </Todo>
            </Todos>
          </GridContainer>
          <GridContainer>
            <h2 className="Canceled">Cancelados</h2>
            <Todos>
              <Todo key="1">
                <Row>
                  <Cel>
                    <p><strong>Nº:</strong> 0101</p>
                  </Cel>
                </Row>
                <Row>
                  <p><strong>Cliente:</strong> Rua das embarcações</p>
                </Row>
              </Todo>
            </Todos>
          </GridContainer>
        </Limitation>
      </Container>
      <Footer/>
    </>
  );
}

export default Dashboard;
