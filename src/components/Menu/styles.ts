import styled from 'styled-components';

//import bgCity from '../../assets/bgBody.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16vh;
  background: #000;
`;

export const Limitation = styled.div`
  display: flex;
  flex: 1;
  max-width: 960px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;

  img{
    flex: 1;
    max-width: 250px;
    width: 100%;
  }
`;

export const MenuBar = styled.ul`
  display: flex;
  li{
    display:inline;
    padding: 8px 15px;
    transition: transform 0.4s;
  }

  li:hover{
    -ms-transform: translateY(-3px); /* IE 9 */
    transform: translateY(-3px); /* Standard syntax */
  }

  li:hover a{
    color:#FF5100;
  }

  & li:last-child{
    background:#FF5100;
    padding: 8px 15px;
    border-radius: 5px;
  }

  & li:last-child:hover a{
    color: #fff
  }

  a{
    text-decoration: none;
    color: #fff;
    font-family: Ubuntu;
    transition: color 0.4s;
  }
`;
