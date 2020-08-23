import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 960px;
  padding: 50px 0;
  width: 100%;
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  h2{
    color: #fd5100;
    font-family: Ubuntu;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 20px;
  }

  input, select{
    border: 1px solid #999;
    height: 35px;
    background: #fff;
    margin-bottom:15px;
    border-radius: 6px;
    padding: 4px 10px;
  }

  div.Row{
    display: flex;
  }

  input.Minimal{
    max-width: 20%;
    margin-right: 5%;
  }

  input.Medium{
    max-width: 75%;
    flex: 1;
  }

  select{
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
   -moz-appearance: none; /* Remove estilo padrão do FireFox */
   appearance: none; /* Remove estilo padrão do FireFox*/
   background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat;  /* Imagem de fundo (Seta) */
   background-position: 99% center;  /*Posição da imagem do background*/
  }

  textarea{
    border: 1px solid #999;
    height: 120px;
    background: #fff;
    margin-bottom:50px;
    border-radius: 6px;
    padding: 4px 10px;
  }

  button{
    background: #fd5100;
    color: #fff;
    font-family: Ubuntu;
    font-weight: 400;
    border: none;
    height: 35px;
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

  @media (max-width: 780px){
    padding: 0 20px;
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 20px 0 50px;

  @media (max-width: 780px){
    padding: 0 20px;
  }

  span{
    font-family: Ubuntu;
    padding: 10px;
    border: 1px solid #999;
    color: #999;
    border-radius: 6px;
    display: block;
    margin-bottom: 25px;
    width: 30%;

    @media (max-width: 780px){
      width: 100%;
    }
  }

  div{
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 20px;

    input{
      margin: 0;
      margin-right: 10px;
    }
    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        position: relative;
        background-color: #d1d3d1;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
        top: 7px;
        left: -3px;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        position: relative;
        background-color: #ff5100;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid white;
    }

    label{
      font-family: Ubuntu;
      font-style: italic;
      font-weight: 400;
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

  @media (max-width: 780px){
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


