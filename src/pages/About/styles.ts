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
  max-width: 960px;
  justify-content: space-between;
  padding: 30px 0;
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: start;

  img{
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

export const RightBox = styled.div`
  flex: 1;
  flex-direction: column;
  margin-left: 40px;
`;

export const LeftBox = styled.div`
  flex: 1;
  flex-direction: column;
  margin-right: 40px;

  h1{ text-align: right}
`;
