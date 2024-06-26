import styled from "styled-components";
import {Span} from "../../pages/index"
import { Link } from "react-router-dom";

export const ConteinerMain = styled.main`
display: flex;
justify-content: center;
align-items: center;
word-wrap: break-word;



`
export const Titulo =styled.h1`
font-size: 100px;

color: rgb(35, 30, 200);
@media (max-width: 400px){
    font-size:3rem;
    margin:0;
}
@media (min-width: 402px)and (max-width:1000px ){
    font-size:70px;
    margin:0;
}
`
const ConteinerTItulo = styled.div`
   display: flex;
width: 400px;
height: auto;
justify-content: center;
align-items: center;
word-wrap: break-word;
flex-wrap: wrap;

@media(max-width: 700px){
    width: 250px;
    height: auto;
    margin: 0;
    
    
}
`
export const Texto = styled.p`
font-size: 25px;
color: #aeadad;;


`
export const Espaco = styled.br`
gap: 20px;
`
export const CorTitulo = styled.span`
color: rgb(35, 30, 200);
`
export const ConteinerBotaoTroca = styled.div`
display: flex;
width: 15rem;
flex-direction: row;
justify-content: space-around;
align-items: center;

`
export const BotaoTroca = styled.button`
height: 40px;
background-color:    rgb(35, 30, 200);
border: none;
border-radius: 50px;
transition: 0.5s linear;
&:hover{
    background-color: #fff;
}
@media (max-width:700px) {
    
}

`
export const Linktroca = styled(Link)`
  text-decoration: none;
  color: #000000;
  

`
    



function Main(){
    return(
        <ConteinerMain>
            <ConteinerTItulo>
            <Titulo>The importance of English<Span> in modern technologies.</Span> </Titulo>

            </ConteinerTItulo>
            </ConteinerMain> 

    )


}
export default Main;