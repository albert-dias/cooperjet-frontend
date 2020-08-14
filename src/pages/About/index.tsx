import React from 'react';
import { Container, Limitation, RightBox, LeftBox} from './styles';

import Menu from '../../components/Menu';
import ImageD from '../../assets/img1.jpg';
import ImageE from '../../assets/img2.jpg';

const About: React.FC = () => {
  return(
    <>
      <Menu/>
      <Container>
        <Limitation>
          <img src={ImageE} alt="Imagem lado esquerdo" width="40%" />
          <RightBox>
            <h1>Nossa história</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </RightBox>
        </Limitation>
        <Limitation>
          <LeftBox>
            <h1>Nossa equipe</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </LeftBox>
          <img src={ImageD} alt="Imagem lado direito" width="40%" />
        </Limitation>
      </Container>
    </>
  )
}

export default About;
