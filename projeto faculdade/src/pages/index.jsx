import BotaoComTExto from "../componentes/teste/teste"
import Main from "../componentes/MAIN/main";
import styled, { createGlobalStyle } from 'styled-components';
import Header from "../componentes/HEADER/header";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #0e1260 40%, #000 ); /* Gradiente linear de branco para preto */
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;;
  }
`;
export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {  
    height: auto;
    width: auto;
  }
  
`


const ConteinerBotao = styled.div` 

display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
@media (max-width:800px){
  flex-direction: column;
}
`

const Conteiner2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


const Imagem = styled.img`
`
const Texto = styled.p`
font-size: 22px;
margin: 20px;
color: white;
@media (max-width:700px){
  margin: 40px;
}

`
const ConteinerTexto = styled.div`
display: flex;
height: 15rem;
width: 38rem;
flex-wrap: wrap;
border-radius: 5px;
@media (max-width:700px){
  width: 28rem;
  height: auto;
  padding: 10px;
  margin: 15px;

}
`
export const Span = styled.span`
color:#fff;
`
const TituloBotao = styled.h1`
position: relative;
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
          <Conteiner2>
          <TituloBotao>
          Click on the button and discover something new.
      </TituloBotao>
      <ConteinerBotao>
        <BotaoComTExto />
      </ConteinerBotao>
        </Conteiner2>




    </Conteiner>
  );
}

export default Home;
