import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Limitation, MenuBarFooter, Socials, Social, Localization, Copyright } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Limitation>
          <MenuBarFooter>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Quem somos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/solicitar">Solicite uma viagem</Link>
            </li>
          </MenuBarFooter>
          <Socials>
            <h3>Redes Sociais</h3>
            <Social>
              <a href="https://api.whatsapp.com/send?phone=5584988806878">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g id="Grupo_18" data-name="Grupo 18" transform="translate(-140 -3238.583)">
                    <path id="Caminho_40" className="BG" data-name="Bg" d="M47.52,36.034a20,20,0,1,1-20-19.9,20,20,0,0,1,20,19.9Z" transform="translate(132.48 3222.453)" fill="#494d56" />
                    <path id="Caminho_41" data-name="Caminho 41" d="M30.779,25.731A11.184,11.184,0,0,0,19.861,16.92H17.748A11.28,11.28,0,0,0,10,33.309a.617.617,0,0,1,0,.529c-.528,1.762-1.057,3.524-1.5,5.2h0l5.9-.793h0A11,11,0,0,0,21.71,39.3a11.19,11.19,0,0,0,9.069-13.569ZM21.446,37.538H20.125a9.5,9.5,0,0,1-5.019-1.322h-.616L11.5,37.01h0l.792-2.82a.705.705,0,0,0,0-.7,9.346,9.346,0,0,1,0-10.485,8.8,8.8,0,0,1,9.421-3.613,8.808,8.808,0,0,1,7.132,7.049,9.252,9.252,0,0,1-7.4,11.1Z" transform="translate(140.174 3230.096)" fill="#fff" fill-rule="evenodd" />
                    <path id="Caminho_42" data-name="Caminho 42" d="M19.733,30.323a3.2,3.2,0,0,1-1.388,0,13.664,13.664,0,0,1-7.366-5.337A9.074,9.074,0,0,1,9.058,21.57a4.056,4.056,0,0,1,1.281-3.736,2.135,2.135,0,0,1,1.815,0h0a21.35,21.35,0,0,0,1.174,2.775,1.388,1.388,0,0,1,0,.64,4.164,4.164,0,0,1-.854,1.067v.747a8.967,8.967,0,0,0,4.59,4.056.641.641,0,0,0,.747,0l.961-1.281h.747l2.028.854h0c.64,0,.64,0,.64,1.067s-1.174,2.135-2.455,2.562Z" transform="translate(144.446 3234.56)" fill="#fff" fill-rule="evenodd" />
                  </g>
                </svg>
                <p>(84)3645-7475 / 991499226</p>
              </a>
            </Social>
            <Social>
              <a href="https://www.instagram.com/cooperjet_express/">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g id="Grupo_19" data-name="Grupo 19" transform="translate(-140 -3083.818)">
                    <g id="Grupo_16" data-name="Grupo 16" transform="translate(609.564 654)">
                      <path id="Caminho_43" className="BG" data-name="Bg" d="M57.51,36.14A19.9,19.9,0,1,1,51.714,22,20,20,0,0,1,57.51,36.14Z" transform="translate(-487.074 2413.678)" fill="#494d56" />
                      <path id="Caminho_44" data-name="Caminho 44" d="M37.1,17.139H21.352a2.562,2.562,0,0,0-2.846,2.846v15.75a2.562,2.562,0,0,0,2.752,2.846H37.1a2.562,2.562,0,0,0,2.846-2.846V19.891A2.467,2.467,0,0,0,37.1,17.139Zm-1.708,2.372c2.087,0,2.087,0,2.087,2.182s0,2.087-2.087,2.087-2.087,0-2.087-2.182S33.307,19.511,35.395,19.511Zm-6.167,4.175a4.175,4.175,0,1,1,0,8.255,4.08,4.08,0,0,1-4.08-4.175A4.175,4.175,0,0,1,29.227,23.686Zm8.254,11.386c0,.949,0,1.233-1.233,1.233H22.206c-.949,0-1.233,0-1.233-1.233V27.2c0-.759,0-.854.949-.854s.949,0,.854.949a6.547,6.547,0,1,0,13-.474v-.474A1.394,1.394,0,0,1,37.2,27.766Z" transform="translate(-478.696 2421.957)" fill="#fff" fill-rule="evenodd" />
                    </g>
                  </g>
                </svg>
                <p>@cooperjet_express</p>
              </a>
            </Social>
            <Social>
              <a href="https://www.facebook.com/Cooperjet.rn/">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                  <g id="Grupo_20" data-name="Grupo 20" transform="translate(753.65 -2203.082)">
                    <path id="Caminho_45" className="BG" data-name="Bg" d="M42.55,36.21a19.9,19.9,0,0,1-18.189,19.9H22.646a22,22,0,0,1-4.381-.476A19.994,19.994,0,1,1,42.55,36.115Z" transform="translate(-756.199 2186.973)" fill="#494d56" />
                    <path id="Caminho_46" data-name="Caminho 46" d="M13.955,22.939a2.135,2.135,0,0,1,1.747-.679,9.706,9.706,0,0,1,2.815,0l.777-4.271a14.851,14.851,0,0,0-5.047-.777,7.571,7.571,0,0,0-4.174.971,4.368,4.368,0,0,0-2.233,2.33,9.707,9.707,0,0,0-.679,4.465v1.65H3.86V31.48h3.3V46.817a22.423,22.423,0,0,0,4.465.485h1.747V31.675h4.465V26.821H13.373V24.977C13.373,24.006,13.47,23.327,13.955,22.939Z" transform="translate(-745.178 2195.682)" fill="#fff" />
                  </g>
                </svg>
                <p>Cooperjet</p>
              </a>
            </Social>
          </Socials>
          <Localization>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4855766876776!2d-35.26137128589973!3d-5.927589559962211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2577581edc445%3A0xf31c507f283c6168!2sR.%20Gov.%20Juvenal%20Lamartine%2C%20566c%20-%20Boa%20Esperan%C3%A7a%2C%20Parnamirim%20-%20RN%2C%2059140-360!5e0!3m2!1spt-BR!2sbr!4v1628557903793!5m2!1spt-BR!2sbr"
              width="100%"
              height="50%"
              title="Endereço base">
            </iframe>
            <p><strong>Matriz: </strong>R. Gov. Juvenal Lamartine, 566 Parnamirim - RN </p>
          </Localization>
        </Limitation>
      </Container>
      <Copyright>
        <p>Copyright &copy; 2018 - 2020 - All Rights Reserved - Cooperjet.com.br</p>
      </Copyright>
    </>
  )
}

export default Footer;
