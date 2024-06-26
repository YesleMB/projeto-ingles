import BotaoComTExto from "../componentes/teste/teste"
import Main from "../componentes/MAIN/main";
import styled, { createGlobalStyle } from 'styled-components';
import Header from "../componentes/HEADER/header";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #0e1260 60%, #000 ); 
    display: flex;
    flex-direction: column;
  }
`;
export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {  
    height: auto;
    width: auto;
  }
  
`


const ConteinerBotao = styled.div` 

display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
@media (max-width:700px){
  flex-direction: column;
}
`

const Conteiner2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Texto = styled.p`
font-size: 22px;
margin: 20px;
color: white;
@media (max-width:700px){
  margin:0;
}

`
export const ConteinerTexto = styled.div`
display: flex;
height: 15rem;
width: 38rem;
flex-wrap: wrap;
@media (max-width:400px){
  width: 20rem;
  height: auto;
  padding: 30px 0 0 0;
  margin: 0;

}
@media (min-width: 402px) and (max-width:1000px ){
  width: 23rem;
  height: auto;
  padding: 30px 0 0 0;
  margin: 0;
}
`
export const Span = styled.span`
color:#fff;
`
const TituloBotao = styled.h1`
display: flex;
justify-content: center;
align-items: center;


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
        <ConteinerTexto>
            <TituloBotao>
          Click on the button and discover something new.
          </TituloBotao>
        </ConteinerTexto>  
        <ConteinerBotao>
          <BotaoComTExto />
        </ConteinerBotao>
      </Conteiner2>




    </Conteiner>
  );
}

export default Home;
