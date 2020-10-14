import styled from 'styled-components';

//import bgCity from '../../assets/bgBody.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background: #fff;

  h1{
    flex:1;
    color: #ff5100;
    font-size:30px;
    margin-bottom: 20px;
  }

  p{
    font-family: 'Ubuntu';
    line-height: 20px;
    text-align: justify;
  }

`;

export const Limitation = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width:960px;
  width: 100%;
  justify-content: space-between;
  padding: 30px 20px;
  align-items: center;

  @media (max-width: 865px){
    justify-content: center;
  }

  img{
    max-width: 420px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const RightBox = styled.div`
  max-width: 400px;
  flex-direction: column;
  padding-top: 30px;
  font-weight: 300;
`;

export const LeftBox = styled.div`
  max-width: 400px;
  flex-direction: column;
  padding-bottom: 30px;
  font-weight: 300;

  h1{ text-align: right}

  strong{
    font-family: Ubuntu;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: right;
  }

  iframe{
    max-width: 420px;
    border: none;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
  }
`;
