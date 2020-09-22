import styled from 'styled-components';

import banner from '../../assets/banner.png';
import bgHomeSup from '../../assets/1.png';
import bgHomeInf from '../../assets/2.png';

export const Campanha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 450px;
  height: 100%;
  background:#EEEEEE;
  background-size: cover;`;

export const CLimitation = styled.div`
  max-width: 960px;
  width: 100%;
  flex-direction: column;
  display: flex;
  padding: 80px 10px 170px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 450px;
  height: 100%;
  background:#EEEEEE url(${banner});
  background-size: cover;
`;

export const Limitation = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 1200px 0;
  flex-direction: column;
  display: flex;
  padding: 80px 10px 170px;

  h1{
    flex:1;
    color: #fff;
    font-size:50px;
    margin-bottom: 40px;
  }

  h3{
    flex:1;
    color: #fff;
    font-size: 30px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    font-style: italic;
  }
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  background: #EEEEEE;
  color: #ff5100;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width:960px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  transition: box-shadow 0.4s, transform 0.4s;
  img{
    object-fit: cover;
    border-radius: 5px;
  }
  &:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: translateY(-5px);
  }
`;

export const Transition = styled.div`
  line-height: 0;
  width: 100%;
  max-width: 1920px;
  height: 0;
  border-style: solid;
  border-color: #fff #EEEEEE;
  border-width: 0px 98vw 90px 0px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#fff url(${bgHomeSup}) no-repeat bottom;
  background-size: contain;
`;

export const Feedbacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  width: 100%;
  color: #ff5100;
  font-family: Ubuntu;
  justify-content: center;
  align-items: center;
  padding: 100px 0 210px;
`;

export const Feedback = styled.div`
  max-width:300px;
  margin: 10px 10px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2{
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 5px;
    margin-bottom: 10px;
    font-style: italic;
    font-weight: 500;
  }

  strong{
    color: #333;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-style: italic;
  }

  p{
    margin-top: 10px;
    font-style: italic;
  }
`;

export const PillarsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#aaa url(${bgHomeInf}) no-repeat;
  background-position: initial;
  background-size: contain;
`;

export const Pillars = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width: 960px;
  width: 100%;
  color: #ff5100;
  font-family: Ubuntu;
  justify-content: center;
  align-items: center;
  padding: 100px 0 200px;
  h1{
    width: 960px;
    text-align: center;
    margin-bottom: 80px;
  }
`;

export const PillarCard = styled.div`
  max-width:220px;
  width: 100%;
  margin: 0 10px 40px;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2{
    font-size: 50px;
    line-height: 50px;
    letter-spacing: 5px;
    margin-bottom: 10px;
    font-style: italic;
    font-weight: 500;
  }

  strong{
    color: #333;
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-style: italic;
  }

  p{
    margin-top: 10px;
    font-style: italic;
  }
`;
