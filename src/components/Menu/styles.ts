import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import { animated } from 'react-spring';

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

  .Login{
    display: flex;
    align-items: center;
    justify-content: center;

    div{
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: right;
      justify-content: center;
      margin-right: 10px;

      p{
        color: #fff;
        font-family: Ubuntu;
        text-align: right;
      }

      span{
        color: #fff;
        font-family: Ubuntu;
        font-size: 10px;
        margin-top: 5px;
        text-align: right;
      }
    }

    button{
      background: transparent;
      border: none;
      margin-right: 10px;
    }

    img{
      width: 35px;
      margin-right: 10px;
      color: #ff5100;
    }

    a{
      color: #fff;
      font-family: Ubuntu;
      text-decoration: none;
      padding: 5px 10px;
      transition: color 0.4s;
      font-size: 12px;
    }

    a:last-child{
      border-left: 1px solid #fff;
    }

    a:hover{
      color:#ff5100;
    }
    @media (max-width: 870px){
      display:none;
    }
  }
`;

export const ContentMenu = styled(FiMenu)`
  @media (min-width: 871px){
    display:none;
  }
`;

export const SubMenu = styled(animated.div)`
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
`;

export const MenuBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li{
    display:inline-flex;
    justify-content: center;
    align-items: center;
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

  & li.ButtomRequest{
    background:#FF5100;
    padding: 8px 15px;
    border-radius: 5px;
  }

  & li.ButtomRequest:hover a{
    color: #fff
  }

  a{
    text-decoration: none;
    color: #fff;
    font-family: Ubuntu;
    transition: color 0.4s;
  }

  @media (max-width: 870px){
    display:none;
  }
`;
