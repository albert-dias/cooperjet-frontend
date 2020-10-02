import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
// import { useLocation } from 'react-router-dom'
import * as Yup from 'yup';
import getValidadionErrors from '../../utils/getValidationErros';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { jsPDF } from 'jspdf';
import Logo from '../../assets/logo.png'

import Select from '../../components/Select';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import ImgMotoboy from '../../assets/motoboyReq.png';

import { Container, Wrapper, Wrapper2, ContentForm, ColumnLeft, ColumnRight, Section } from './styles';

interface PriceNeighborhood{
  to: string;
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
  // const [ isSend, setIsSend ] = useState<string>();
  const [ isDestination, setIsDestination ] = useState<string>();
  const [ isPrice, setIsPrice ] = useState<PriceNeighborhood>({price: 0} as PriceNeighborhood);
  const [isLocation, setIsLocation] = useState<PriceNeighborhood[]>([] as PriceNeighborhood[]);
  // const [isBalance, setIsBalance]=useState<PriceData>({} as PriceData);
  const formRef = useRef<FormHandles>(null);
  const { user, token } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadData(){
      const response = await api.get('/cpanel/prices');

      setIsLocation(response.data);
    }

    loadData();
  }, []);

  const options =
    isLocation.map(local =>(
      {key:local.to, value: local.to, label: local.to }
    ))

  const payment_options = [
    { value: 'cashIn', label: 'Dinheiro na retirada' },
    { value: 'cashOut', label: 'Dinheiro na entrega' },
    { value: 'machineCard', label: 'Cartão de crédito/débito' },
    { value: 'transferBanking', label: 'Transferência bancária' }
  ]

 // const SenderNeighborhoodCalc = useCallback(() => {
  //   const send = formRef.current?.getFieldValue('sender_neighborhood');
  //   setIsSend(send)
  //   return send;
  // }, []);

  const RecipientNeighborhoodCalc = useCallback(() => {
    const destination = formRef.current?.getFieldValue('recipient_neighborhood');
    setIsDestination(destination)
    return destination;
  }, []);

  const FilterPrice = useCallback((destination) => {
    // SenderNeighborhoodCalc();
    RecipientNeighborhoodCalc();

    const recipientLocation = isLocation.filter(recipientlocation => recipientlocation.to === destination);

    // const recipientLocation = senderLocation.filter(recipientlocation => recipientlocation.destination === destination);

    return recipientLocation;


  },[isLocation, RecipientNeighborhoodCalc ]);

  useEffect(() => {

    const Pap = FilterPrice(isDestination);

    const price = Pap[0];

    if(price) {
      setIsPrice(price)
    };

  },[FilterPrice, isDestination ]);

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

      const appointment = response.data;

      const doc = new jsPDF();
      doc.rect(0, 0, 500, 30, "F");
      doc.addImage(Logo, 'PNG', 70, 5, 63, 21)

      doc.text(`Nº: ${appointment.number}`, 10, 40);
      doc.text(`Valor: R$${appointment.price},00`, 110, 40);

      doc.text(`Retirada`, 10, 50);
      doc.text(`Pagamento: ${appointment.payment}`, 110, 50);

      doc.text(`Nome: ${appointment.sender_name}`, 10, 60);
      doc.text(`Contato: ${appointment.sender_cel}`, 110, 60);

      doc.text(`Endereço: ${appointment.sender_address}`, 10, 70);

      doc.text(`Número: ${appointment.sender_number}`, 10, 80);
      doc.text(`Complemento: ${appointment.sender_complement}`, 60, 80);

      doc.text(`Bairro: ${appointment.sender_neighborhood}`, 10, 90);
      doc.text(`Cidade: ${appointment.sender_city}`, 110, 90);

      appointment.sender_note && doc.text(`Observação: ${appointment.sender_note}`, 10, 100);

      doc.text(`Entrega`, 10, 120);

      doc.text(`Nome: ${appointment.recipient_name}`, 10, 130);
      doc.text(`Contato: ${appointment.recipient_cel}`, 110, 130);

      doc.text(`Endereço: ${appointment.recipient_address}`, 10, 140);

      doc.text(`Número: ${appointment.recipient_number}`, 10, 150);
      doc.text(`Complemento: ${appointment.recipient_complement}`, 60, 150);

      doc.text(`Bairro: ${appointment.recipient_neighborhood}`, 10, 160);
      doc.text(`Cidade: ${appointment.recipient_city}`, 110, 160);

      appointment.recipient_note && doc.text(`Observação: ${appointment.recipient_note}`, 10, 170);

      doc.text(`Agradecemos por sua preferencia sr(a) ${appointment.sender_name}`, 10, 180);

      doc.save(`${appointment.number}.pdf`);

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

                <Select name="sender_neighborhood" id="sender_neighborhood" options={options} />

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
