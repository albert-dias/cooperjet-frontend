import styled from 'styled-components';

//import bgCity from '../../assets/bgBody.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background: #222222;
`;

export const Limitation = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  justify-content: center;
  padding: 30px;

`;

export const MenuBarFooter = styled.ul`
  width: 280px;
  flex:1;

  li{
    display: flex;
    padding: 10px 15px;
    border-bottom: 1px solid #999999
  }

  a{
    text-decoration: none;
    color: #fff;
    font-family: Ubuntu;
    font-style: italic;
    transition: color 0.4s, transform 0.4s;

  }

  li:hover a{
    color:#FF5100;
    -ms-transform: translateY(5px); /* IE 9 */
    transform: translatex(5px); /* Standard syntax */
  }

  & li:last-child{
    border: none;
  }

  @media (max-width: 780px){
    min-width: 355px;
    width: 100%;

    li{
      justify-content: center;
    }
  }
`;

export const Socials = styled.div`
  width: 280px;
  flex: 1;
  padding: 20px 0;
  margin: 0 30px;

  h3{
    color:  #FF5100;
    font-family: Ubuntu;
    font-weight: 400;
    text-align: center;
    margin-bottom: 10px;
  }

  @media (max-width: 780px){
    min-width: 355px;
    width: 100%;
    margin: 0;
  }
`;
export const Social = styled.div`
  display: flex;
  align-items: center;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: Ubuntu;
    font-weight: 400;
    color: #fff;
    transition: color 0.4s;

    svg{
      width:25px;
      margin-right: 8px;

      .BG{
        fill:#494d56;
        transition: fill 0.4s;
      }
    }
    &:hover{
      color: #FF5100;
      svg{
        .BG{
          fill:#FF5100;
          }
      }
    }
  }
  @media (max-width: 780px){
    justify-content: center;
  }
`;
export const Localization = styled.div`
  width: 280px;
  flex:1;


  iframe {
    border: none;
    border-radius: 6px;
    height:100%;
  }
  p{
    color: #fff;
    font-family: Ubuntu;
    font-size: 10px;
    margin-top: 5px;
  }

  @media (max-width: 780px){
    min-width: 355px;
    width: 100%;
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;

  p{
    font-family: Ubuntu;
    font-size: 12px;
    color: #ff5100;
  }
`;
