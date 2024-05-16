import BotaoComTExto from "../componentes/teste/teste"
import Main from "../componentes/MAIN/main";
import styled, { createGlobalStyle } from 'styled-components';
import Header from "../componentes/HEADER/header";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #0e1260 40%, #000 ); /* Gradiente linear de branco para preto */

  }
`;
export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`


const ConteinerBotao = styled.div` 

position: relative;
bottom: 15px;
right: 30px;
`
const ConteinerFoto = styled.div`
display: flex;
height: 15rem;
width:  100%;
`
const Conteiner2 = styled.div`


`


const Imagem = styled.img`
`
const Texto = styled.p`
font-size: 22px;
margin: 20px;
color: white;
`
const ConteinerTexto = styled.div`
display: flex;
height: 15rem;
width: 38rem;
flex-wrap: wrap;
border-radius: 5px;
`
export const Span = styled.span`
color:#fff;
`
const TituloBotao = styled.h1`
position: relative;
left: 8.4rem;
`



function Home() {


  return (
    <Conteiner>
      <GlobalStyle />     
      <Header />
      <Main />
      <ConteinerTexto>
          <Texto>
        English is a crucial skill in various areas of modern life. In the professional world, it is the key to effective communication in global business. Academically and scientifically, it is the gateway to a wide range of educational resources and opportunities. In the digital age, it is the predominant language of technology and the internet. Additionally, it plays a vital role in global communication, facilitating connection among people from different backgrounds and cultures
          </Texto>
          </ConteinerTexto>
      <ConteinerBotao>
      <TituloBotao>
      Click on the button and discover something new.
      </TituloBotao>
        <BotaoComTExto />
      </ConteinerBotao>




    </Conteiner>
  );
}

export default Home;
