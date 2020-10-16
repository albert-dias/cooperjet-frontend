import styled from "styled-components";


export const Container = styled.div`
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 960px;
  padding: 50px 0;
  width: 100%;
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 849px){
    justify-content: center;
    }

  h2{
    color: #fd5100;
    font-family: Ubuntu;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 20px;
  }

  div.Row{
    display: flex;
    @media (max-width: 780px){
      flex-wrap: wrap;
    }
  }

  input{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400px;
    font-size: 14px;
  }

  #sender_neighborhood, #recipient_neighborhood, #payment, #sender_city, #recipient_city{
    border: 0;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400px;
    font-size: 14px;
    width: 380px;

    background-color: #fff;
    margin-top: 0;
    height: 40px;
    border-radius: 6px;

    > div{
      border-radius: 6px;
      border: 0px;
    }
  }

  textarea{
    border: 0;
    height: 120px;
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    width: 380px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400px;
    font-size: 14px;
  }

  button{
    width: 380px;
    background: #fd5100;
    color: #fff;
    font-family: Ubuntu;
    font-weight: 400;
    border: none;
    height: 40px;
    font-size: 18px;
    border-radius: 6px;
    margin-top: 80px;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 50px 0 20px;

  @media (max-width: 849px){
    align-items: center;
    padding: 0 20px;
  }
`;

export const ColumnRight = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 20px 0 0px;

  @media (max-width: 849px){
    align-items: center;
    padding: 0 20px;
    max-width: 849px;
    padding: 0 20px;
  }

  > span{
    width: 380px;
    font-family: Ubuntu;
    padding: 10px;
    border: 0;
    color: #999;
    border-radius: 6px;
    display: block;
    margin-bottom: 25px;
    width: 100%;
    background: #fff;

    @media (max-width: 849px){
      max-width: 380px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: #f9793c;
  font-family: Ubuntu;
  font-weight: 400;

  h2{
    font-style: italic;
    margin-bottom: 20px;
  }

  p{
    color: #fff;
  }

  img{
    margin-top: -243px;
    width: 650px;
    display: flex;
  }

  @media (max-width: 849px){
    justify-content: center;
    img{
      display: none;
    }
  }
  @media (max-width: 1300px){
    img{
      margin-top: -95px;
      width: 420px;
    }
  }
`;

export const Wrapper2 = styled.div`
  max-width: 480px;
  padding: 30px 0;
  width: 100%;

  @media (max-width: 780px){
    padding: 30px 20px;
  }
`;


