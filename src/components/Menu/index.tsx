import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Limitation, MenuBar } from './styles';
import logo from '../../assets/logo.png'

const Menu: React.FC = () => {
  return(
    <Container>
      <Limitation>
      <Link to="/home"><img src={logo} alt="Cooperjet" height="80px" /></Link>
        <MenuBar>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Quem somos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/solicitar">CHAME JÁ!</Link>
          </li>
        </MenuBar>
      </Limitation>
    </Container>
  )
}

export default Menu;
