import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import ImgMotoboy from '../../assets/motoboyReq.png'

import { Container, Wrapper, Wrapper2, Form, ColumnLeft, ColumnRight, Section } from './styles';

const Request: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <Wrapper>
          <Form>
            <ColumnLeft>
              <h2>Onde devo retirar a encomenda</h2>
              <input type="text" name="sender_name" placeholder="Quem devo procurar?" id="sender_name"/>
              <input type="text" name="sender_address" placeholder="Endereço de coleta"id="sender_address"/>
              <div className="Row">
                <input className="Minimal" type="text" name="sender_number" placeholder="Número"id="sender_number"/>
                <input className="Medium" type="text" name="sender_complement" placeholder="Complemento" id="recipient_complement"/>
              </div>
              <input type="text" name="sender_city" placeholder="Cidade" id="sender_city"/>
              <select id="sender_neighborhood">
                <option value="Felipe Camarão">Felipe Camarão</option>
                <option value="Neópolis">Neópolis</option>
                <option value="Cidade Nova">Cidade Nova</option>
                <option value="" selected>Selecione um bairro</option>
              </select>
              <input type="tel" name="sender_cel" placeholder="Telefone/Whatsapp" id="sender_cel"/>
              <textarea name="sender_note" id="sender_note" placeholder="Observações"></textarea>

              <h2>Onde devo deixar a encomenda</h2>
              <input type="text" name="recipient_name" placeholder="A quem devo entregar?" id="recipient_name"/>
              <input type="text" name="recipient_address" placeholder="Endereço de entrega?"id="recipient_address"/>
              <div className="Row">
                <input className="Minimal" type="text" name="recipient_number" placeholder="Número" id="sender_number"/>
                <input className="Medium" type="text" name="recipient_complement" placeholder="Complemento" id="recipient_complement"/>
              </div>
              <input type="text" name="recipient_city" placeholder="Cidade" id="recipient_city"/>
              <select id="recipient_neighborhood">
                <option value="Felipe Camarão">Felipe Camarão</option>
                <option value="Neópolis">Neópolis</option>
                <option value="Cidade Nova">Cidade Nova</option>
                <option value="" selected>Selecione um bairro</option>
              </select>
              <input type="tel" name="recipient_cel" placeholder="Telefone/ Whatsapp" id="recipient_cel"/>
              <textarea name="recipient_note" id="recipient_note" placeholder="Observações"></textarea>
            </ColumnLeft>
            <ColumnRight>
              <h2>Valor</h2>
              <span>R$ 15,00</span>
              <h2>Forma de pagamento</h2>
              <div>
                <input type="radio" id="chashOut" name="payment" value="chashOut" />
                <label>Dinheiro na retirada</label>
              </div>
              <div>
                <input type="radio" id="chashIn" name="payment" value="chashIn"/>
                <label>Dinheiro na entrega</label>
              </div>
              <div>
                <input type="radio" id="card" name="payment" value="card" />
                <label>Cartão de crédito/débito</label>
              </div>
              <div>
                <input type="radio" id="transfer" name="payment" value="transfer"/>
                <label>Transferência bancária</label>
              </div>
              <button>Solicitar agora</button>
            </ColumnRight>

          </Form>
        </Wrapper>
      </Container>
      <Section>
        <Wrapper2>
          <h2>Descomplique! Chame a Cooperjet.</h2>
          <p>Rápido, fácil e de confiança</p>
          <p>Praticidade sobre duas rodas. Pediu? Chegou!</p>
        </Wrapper2>
        <img src={ImgMotoboy} alt='Motoboy' />
      </Section>
      <Footer />
    </>
  );
}

export default Request;
