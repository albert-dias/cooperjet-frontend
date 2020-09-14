import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
// import { useLocation } from 'react-router-dom'
import * as Yup from 'yup';
import getValidadionErrors from '../../utils/getValidationErros';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Select from '../../components/Select';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import ImgMotoboy from '../../assets/motoboyReq.png';

import { Container, Wrapper, Wrapper2, ContentForm, ColumnLeft, ColumnRight, Section } from './styles';

interface PriceNeighborhood{
  destination: string;
  send: string;
  price: number;
}
interface FormData{
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
}

interface PriceData{
  balance: number;
}

interface RecipientData{
  name: string;
  address: string;
  number: string;
  complement: string;
  city: string;
  neighborhood: string;
  cel: string;
  note: string;
}

interface SenderData extends RecipientData{
  id: string;
}

const Request: React.FC = () => {
  const [ isSend, setIsSend ] = useState<string>();
  const [ isDestination, setIsDestination ] = useState<string>();
  const [ isPrice, setIsPrice ] = useState<PriceNeighborhood>({price: 0} as PriceNeighborhood);
  const [isLocation, setIsLocation] = useState<PriceNeighborhood[]>([] as PriceNeighborhood[]);
  // const [isBalance, setIsBalance]=useState<PriceData>({} as PriceData);
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const { addToast } = useToast();

  const options = [
    { value: 'Alecrim', label: 'Alecrim' },
    { value: 'Areia Preta', label: 'Areia Preta' },
    { value: 'Barro Vermelho', label: 'Barro Vermelho' },
    { value: 'Bom Pastor', label: 'Bom Pastor' },
    { value: 'Candelária', label: 'Candelária' },
    { value: 'Capim Macio', label: 'Capim Macio' },
    { value: 'Cidade Alta', label: 'Cidade Alta' },
    { value: 'Cidade da Esperança', label: 'Cidade da Esperança' },
    { value: 'Cidade Nova', label: 'Cidade Nova' },
    { value: 'Dix-Sept Rosado', label: 'Dix-Sept Rosado' },
    { value: 'Felipe Camarão', label: 'Felipe Camarão' },
    { value: 'Guarapes', label: 'Guarapes' },
    { value: 'Igapó', label: 'Igapó' },
    { value: 'Lagoa Azul', label: 'Lagoa Azul' },
    { value: 'Lagoa Nova', label: 'Lagoa Nova' },
    { value: 'Lagoa Seca', label: 'Lagoa Seca' },
    { value: 'Mãe Luíza', label: 'Mãe Luíza' },
    { value: 'Neópolis', label: 'Neópolis' },
    { value: 'Nordeste', label: 'Nordeste' },
    { value: 'Nossa Senhora da Apresentação', label: 'Nossa Senhora da Apresentação' },
    { value: 'Nossa Senhora de Nazaré', label: 'Nossa Senhora de Nazaré' },
    { value: 'Nova Descoberta', label: 'Nova Descoberta' },
    { value: 'Pajuçara', label: 'Pajuçara' },
    { value: 'Petrópolis', label: 'Petrópolis' },
    { value: 'Pitimbu', label: 'Pitimbu' },
    { value: 'Planalto', label: 'Planalto' },
    { value: 'Ponta Negra', label: 'Ponta Negra' },
    { value: 'Potengi', label: 'Potengi' },
    { value: 'Praia do Meio', label: 'Praia do Meio' },
    { value: 'Quintas', label: 'Quintas' },
    { value: 'Redinha', label: 'Redinha' },
    { value: 'Ribeira', label: 'Ribeira' },
    { value: 'Rocas', label: 'Rocas' },
    { value: 'Salinas', label: 'Salinas' },
    { value: 'Santos Reis', label: 'Santos Reis' },
    { value: 'Tirol', label: 'Tirol' },
    { value: 'Água Vermelha', label: 'Água Vermelha' },
    { value: 'Antônio Fernandes', label: 'Antônio Fernandes' },
    { value: 'Bela Parnamirim', label: 'Bela Parnamirim' },
    { value: 'Boa Esperança', label: 'Boa Esperança' },
    { value: 'Cajupiranga', label: 'Cajupiranga' },
    { value: 'Centro', label: 'Centro' },
    { value: 'Cohabinal', label: 'Cohabinal' },
    { value: 'Cotovelo', label: 'Cotovelo' },
    { value: 'Cotovelo - Distrito Litoral', label: 'Cotovelo - Distrito Litoral' },
    { value: 'Distrito Industrial', label: 'Distrito Industrial' },
    { value: 'Eduardo Gomes', label: 'Eduardo Gomes' },
    { value: 'Emaús', label: 'Emaús' },
    { value: 'Jardim América', label: 'Jardim América' },
    { value: 'Jardim Cohabinal', label: 'Jardim Cohabinal' },
    { value: 'Jardim Planalto', label: 'Jardim Planalto' },
    { value: 'Jockey', label: 'Jockey' },
    { value: 'Liberdade', label: 'Liberdade' },
    { value: 'Loteamento Taborda', label: 'Loteamento Taborda' },
    { value: 'Marília', label: 'Marília' },
    { value: 'Marina', label: 'Marina' },
    { value: 'Monte Castelo', label: 'Monte Castelo' },
    { value: 'Nova Esperança', label: 'Nova Esperança' },
    { value: 'Nova Parnamirim', label: 'Nova Parnamirim' },
    { value: 'Parnamirim', label: 'Parnamirim' },
    { value: 'Parque das Árvores', label: 'Parque das Árvores' },
    { value: 'Parque das Nações', label: 'Parque das Nações' },
    { value: 'Parque de Exposições', label: 'Parque de Exposições' },
    { value: 'Parque do Jiqui', label: 'Parque do Jiqui' },
    { value: 'Parque do Pitimbu', label: 'Parque do Pitimbu' },
    { value: 'Parque Exposições', label: 'Parque Exposições' },
    { value: 'Parque Industrial', label: 'Parque Industrial' },
    { value: 'Parque Nações', label: 'Parque Nações' },
    { value: 'Passagem de Areia', label: 'Passagem de Areia' },
    { value: 'Pirangi Dentro', label: 'Pirangi Dentro' },
    { value: 'Pirangi do Norte', label: 'Pirangi do Norte' },
    { value: 'Pirangi do Sul', label: 'Pirangi do Sul' },
    { value: 'Pium', label: 'Pium' },
    { value: 'Primavera', label: 'Primavera' },
    { value: 'Rosa dos Ventos', label: 'Rosa dos Ventos' },
    { value: 'Santa Tereza', label: 'Santa Tereza' },
    { value: 'Santos Reis', label: 'Santos Reis' },
    { value: 'Vale do Sol', label: 'Vale do Sol' },
    { value: 'Vida Nova', label: 'Vida Nova' },
    { value: 'Vila Sol', label: 'Vila Sol' }
  ]

  useEffect(() => {
    setIsLocation([
      { send: 'Alecrim', destination: 'Alecrim', price: 5 },
      { send: 'Alecrim', destination: 'Areia Preta', price: 10 },
      { send: 'Alecrim', destination: 'Barro Vermelho', price: 10 },
      { send: 'Alecrim', destination: 'Bom Pastor', price: 10 },
      { send: 'Alecrim', destination: 'Candelária', price: 10 },
      { send: 'Alecrim', destination: 'Capim Macio', price: 15 },
      { send: 'Alecrim', destination: 'Cidade Alta', price: 10 },
      { send: 'Alecrim', destination: 'Cidade da Esperança', price: 10 },
      { send: 'Alecrim', destination: 'Cidade Nova', price: 10 },
      { send: 'Alecrim', destination: 'Dix-Sept Rosado', price: 10 },
    ]);
  }, []);


  const payment_options = [
    { value: 'cashIn', label: 'Dinheiro na retirada' },
    { value: 'cashOut', label: 'Dinheiro na entrega' },
    { value: 'machineCard', label: 'Cartão de crédito/débito' },
    { value: 'voucher', label: 'Crédito online' },
    { value: 'transferBanking', label: 'Transferência bancária' }
  ]

  const SenderNeighborhoodCalc = useCallback(() => {
    const send = formRef.current?.getFieldValue('sender_neighborhood');
    setIsSend(send)
    return send;
  }, []);

  const RecipientNeighborhoodCalc = useCallback(() => {
    const destination = formRef.current?.getFieldValue('recipient_neighborhood');
    setIsDestination(destination)
    return destination;
  }, []);

  const FilterPrice = useCallback((send, destination) => {
    SenderNeighborhoodCalc();
    RecipientNeighborhoodCalc();

    console.log(send, destination);

    const senderLocation = isLocation.filter(senderlocation => senderlocation.send === send);

    const recipientLocation = senderLocation.filter(recipientlocation => recipientlocation.destination === destination);

    return recipientLocation;


  },[isLocation, SenderNeighborhoodCalc, RecipientNeighborhoodCalc ]);

  useEffect(() => {

    const Pap = FilterPrice(isSend, isDestination);

    const price = Pap[0];

    if(price) {
      setIsPrice(price)
    };

  },[FilterPrice, isSend, isDestination ]);

  // const checkBalance = useCallback(({ payment }) => {
  //   const paymentMethod = payment;

  //   (user.balance === null ) ? setIsBalance({balance: 0}) : setIsBalance({ balance: Number(user.balance)})

  //   console.log(isBalance);

  //   if (paymentMethod === 'voucher' && Number(isBalance) < isPrice.price){
  //     addToast({
  //       type: 'error',
  //       title: 'Saldo insuficiente',
  //       description: 'Selecione outro método de pagamento ou faça uma recarga!',
  //     });
  //   }

  //   const resbBalance = isBalance.balance - isPrice.price;

  //   setIsBalance({ balance: resbBalance });

  //   return isBalance;

  // }, [user.balance, addToast, isBalance, isPrice]);





  const handleSubmit = useCallback(async (data: FormData) => {
    try{
      const schema = Yup.object().shape({
        sender_name: Yup.string().required('Nome obrigatório'),
        sender_address: Yup.string().required('Endereço obrigatório'),
        sender_number: Yup.string().required('Número obrigatório'),
        sender_complement: Yup.string(),
        sender_city: Yup.string().required('Cidade obrigatória'),
        sender_neighborhood: Yup.string().required('Bairro obrigatório'),
        sender_cel: Yup.string().required('Celular obrigatório'),
        sender_note: Yup.string(),
        recipient_name: Yup.string().required('Nome obrigatório'),
        recipient_address: Yup.string().required('Endereçoo obrigatório'),
        recipient_number: Yup.string().required('Número obrigatório'),
        recipient_complement: Yup.string(),
        recipient_city: Yup.string().required('Cidade obrigatória'),
        recipient_neighborhood: Yup.string().required('Bairro obrigatório'),
        recipient_cel: Yup.string().required('Celular obrigatório'),
        recipient_note: Yup.string(),
        payment: Yup.string().required('Tipo de pagamento obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const sender: SenderData = {
        id: user.id,
        name: data.sender_name,
        address: data.sender_address,
        number: data.sender_number,
        complement: data.sender_complement,
        city: data.sender_city,
        neighborhood: data.sender_neighborhood,
        cel: data.sender_cel,
        note: data.sender_note,
      }

      const recipient: RecipientData = {
        name: data.recipient_name,
        address: data.recipient_address,
        number: data.recipient_number,
        complement: data.recipient_complement,
        city: data.recipient_city,
        neighborhood: data.recipient_neighborhood,
        cel: data.recipient_cel,
        note: data.recipient_note,
      }

      const { payment } = data;
      const price = isPrice.price;

      // const RestB = checkBalance({payment, price})
      // console.log(RestB)

      const response = await api.post('appointments', {
        sender,
        recipient,
        price,
        payment,
      }, {
        headers: {'authorization': `Bearer ${token}`}
      });

      console.log(response.data)
      // createAppointment(sender, recipient, payment);

      addToast({
        type: 'success',
        title: 'Solicitação enviada',
        description: 'Obrigado por utilizar nosso serviço!',
      });

    } catch (err){
      if(err instanceof Yup.ValidationError){
        const errors= getValidadionErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
          type: 'error',
          title: 'Erro na solicitação',
          description: 'Ocorreu um erro ao fazer a solicitação, tente novamente',
        });
      }
    }, [addToast, user.id, token, isPrice.price]);

  return (
    <>
      <Menu />
      <Container>
        <Wrapper>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ContentForm>
              <ColumnLeft>
                <h2>Onde devo retirar a encomenda</h2>
                <Input type="text" name="sender_name" placeholder="Quem devo procurar?" id="sender_name"/>
                <Input type="text" name="sender_address" placeholder="Endereço de coleta"id="sender_address"/>
                <Input type="text" name="sender_number" placeholder="Número"id="sender_number"/>
                <Input type="text" name="sender_complement" placeholder="Complemento" id="recipient_complement"/>
                <Input type="text" name="sender_city" placeholder="Cidade" id="sender_city"/>

                <Select onBlur= {SenderNeighborhoodCalc} name="sender_neighborhood" id="sender_neighborhood" options={options} />

                <Input type="tel" name="sender_cel" placeholder="Telefone/Whatsapp" id="sender_cel"/>

                <TextArea name="sender_note" id="sender_note"  placeholder="Observações"></TextArea>

                <h2>Onde devo deixar a encomenda</h2>
                <Input type="text" name="recipient_name" placeholder="A quem devo entregar?" id="recipient_name"/>
                <Input type="text" name="recipient_address" placeholder="Endereço de entrega?"id="recipient_address"/>
                <Input type="text" name="recipient_number" placeholder="Número" id="sender_number"/>
                <Input type="text" name="recipient_complement" placeholder="Complemento" id="recipient_complement"/>
                <Input type="text" name="recipient_city" placeholder="Cidade" id="recipient_city"/>

                <Select onBlur={RecipientNeighborhoodCalc} name="recipient_neighborhood" id="recipient_neighborhood" options={options} />

                <Input type="tel" name="recipient_cel" placeholder="Telefone/ Whatsapp" id="recipient_cel"/>

                <TextArea name="recipient_note" id="recipient_note" placeholder="Observações"></TextArea>

              </ColumnLeft>
              <ColumnRight>
                <h2>Valor</h2>
                <span>R$ { isPrice.price },00</span>
                <h2>Forma de pagamento</h2>

                <Select id="payment" name="payment" options={payment_options} />

                <button type="submit">Solicitar agora</button>
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
