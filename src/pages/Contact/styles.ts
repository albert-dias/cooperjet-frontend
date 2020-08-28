import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeeee;
`;

export const Limitation = styled.div `
  display: flex;
  max-width: 960px;
  width: 100%;
  padding: 50px 20px 150px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px){
    justify-content: center;
  }

  img{
    display: flex;
    width: 30%;


    @media (max-width: 700px){
     display: none;
    }
  }


`;

export const Form = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 700px){
    width: 100%;
  }
  h1{
    color: #ff5100;
    margin-bottom: 20px;;
  }

  input, select{
    border: 1px solid #999;
    height: 35px;
    background: #fff;
    margin-bottom:15px;
    border-radius: 6px;
    padding: 4px 10px;
  }

  textarea{
    border: 1px solid #999;
    height: 160px;
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
    margin-top: 30px;
  }
`;
export const Section = styled.div `
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
    margin-top: -135px;
    width: 480px;
    display: flex;
  }

  @media (max-width: 700px){
    justify-content: center;
    img{
      display: none;
    }
  }
  @media (max-width: 1300px){
    img{
      margin-top: -120px;
      width: 420px;
    }
  }
`;
export const Wrapper2 = styled.div `
  max-width: 630px;
  padding: 30px 20px;
  width: 100%;

  @media (max-width: 780px){
    padding: 30px 20px;
  }
`;
