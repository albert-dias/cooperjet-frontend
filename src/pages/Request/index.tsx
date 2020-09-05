import { Form } from '@unform/web'
import React from 'react'

import Select from '../../components/Select'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import ImgMotoboy from '../../assets/motoboyReq.png'

import { Container, Wrapper, Wrapper2, ContentForm, ColumnLeft, ColumnRight, Section } from './styles';

const Request: React.FC = () => {
  // const [isSenderNote, setIsSenderNote] = useState('');
  // const [isRecipientNote, setIsRecipientNote] = useState(' ');


  const sender_options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const recipient_options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const payment_options = [
    { value: 'cashIn', label: 'Dinheiro na retirada' },
    { value: 'cashOut', label: 'Dinheiro na entrega' },
    { value: 'machineCard', label: 'Cartão de crédito/débito' },
    { value: 'transferBanking', label: 'Transferência bancária' }
  ]

  function handleSubmit(data: object): void{
    console.log(data);
  }
  return (
    <>
      <Menu />
      <Container>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <ContentForm>
              <ColumnLeft>
                <h2>Onde devo retirar a encomenda</h2>
                <Input type="text" name="sender_name" placeholder="Quem devo procurar?" id="sender_name"/>
                <Input type="text" name="sender_address" placeholder="Endereço de coleta"id="sender_address"/>
                <Input type="text" name="sender_number" placeholder="Número"id="sender_number"/>
                <Input type="text" name="sender_complement" placeholder="Complemento" id="recipient_complement"/>
                <Input type="text" name="sender_city" placeholder="Cidade" id="sender_city"/>

                <Select name="sender_neighborhood" id="sender_neighborhood" options={sender_options} />

                <Input type="tel" name="sender_cel" placeholder="Telefone/Whatsapp" id="sender_cel"/>

                <TextArea name="sender_note" id="sender_note"  placeholder="Observações"></TextArea>

                <h2>Onde devo deixar a encomenda</h2>
                <Input type="text" name="recipient_name" placeholder="A quem devo entregar?" id="recipient_name"/>
                <Input type="text" name="recipient_address" placeholder="Endereço de entrega?"id="recipient_address"/>
                <Input type="text" name="recipient_number" placeholder="Número" id="sender_number"/>
                <Input type="text" name="recipient_complement" placeholder="Complemento" id="recipient_complement"/>
                <Input type="text" name="recipient_city" placeholder="Cidade" id="recipient_city"/>

                <Select name="recipient_neighborhood" id="recipient_neighborhood" options={recipient_options} />

                <Input type="tel" name="recipient_cel" placeholder="Telefone/ Whatsapp" id="recipient_cel"/>

                <TextArea name="recipient_note" id="recipient_note" placeholder="Observações"></TextArea>

              </ColumnLeft>
              <ColumnRight>
                <h2>Valor</h2>
                <span>R$ 15,00</span>
                <h2>Forma de pagamento</h2>

                <Select id="payment" name="payment" options={payment_options} />

                <button>Solicitar agora</button>
              </ColumnRight>
            </ContentForm>
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
