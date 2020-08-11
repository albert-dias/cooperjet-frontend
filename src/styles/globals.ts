import { createGlobalStyle } from 'styled-components';
//import bgCity from '../assets/bgBody.png';

export default createGlobalStyle`
h1{
  font-family: 'Ubuntu';
  font-weight: 500;
  font-style: italic;
}

*{
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
}
body{
  background-color:#000;
  -webkit-font-smoothing: antialiased;
}
body, input, button{
  font: 16px, 'Ubuntu', sans-serif
}
#root{
  margin: 0 auto;
}
button {
  cursor: pointer;
}
`;
