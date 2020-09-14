import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Limitation, MenuBar } from './styles';
import logo from '../../assets/logo.png'
import { useAuth } from '../../hooks/auth';
import { FiPower } from 'react-icons/fi';
import Avatar from '../../assets/teste.svg';

const Menu: React.FC = () => {
  const { user, signOut, signed } = useAuth();

  return(
    <Container>
      <Limitation>
        <Link to="/"><img src={logo} alt="Cooperjet" width="100%" /></Link>
        <MenuBar>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Quem somos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li className="ButtomRequest">
            <Link to="/solicitar">CHAME JÁ!</Link>
          </li>
        </MenuBar>
        <div className="Login" >
          {signed && (
          <>
            <div>
              <p>{user.name}</p>
              <span>{(user.balance === null ) ? 'R$ 0,00' : `R$ ${user.balance},00`}</span>
            </div>
            <button onClick={signOut} type='button'>
              <FiPower color="#ff5100" size={20}/>
            </button>
          </>
          )}
          <img src={Avatar} alt='avatar'/>
          {/* <svg width="49" height="41" viewBox="0 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.0935 40.5704C46.3128 36.3063 48.2328 30.9301 48.2328 25.0875C48.2328 11.2321 37.4355 0 24.1164 0C10.7973 0 0 11.2321 0 25.0875C0 30.9302 1.92001 36.3064 5.13948 40.5706C7.09564 34.1859 13.4956 29.3002 21.4039 28.38C16.8912 27.1347 13.5656 22.8566 13.5656 17.7703C13.5656 11.7086 18.2894 6.79457 24.1165 6.79457C29.9436 6.79457 34.6674 11.7086 34.6674 17.7703C34.6674 22.8565 31.3417 27.1347 26.829 28.38C34.7373 29.3001 41.1372 34.1857 43.0935 40.5704Z" fill="white" fill-opacity="0.1"/>
          </svg> */}
          {!signed && (
            <>
              <Link to="/login">Entrar</Link>
              <Link to="/cadastro">Cadastrar</Link>
            </>
          )}
        </div>
      </Limitation>
    </Container>
  )
}

export default Menu;
