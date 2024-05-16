import {Conteiner,GlobalStyle} from "./index";
import Header from "../componentes/HEADER/header";
import {ConteinerMain,Texto,Espaco,CorTitulo,ConteinerBotaoTroca,BotaoTroca,Linktroca} from "../componentes/MAIN/main";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ConteinerConteudo1= styled(ConteinerMain)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50rem;

`


function Conteudo1(){
    return(
    <Conteiner>
        <GlobalStyle/>
        <Header/>
        <ConteinerConteudo1>
        <h1><CorTitulo>IMPORTANCE OF ENGLISH IN STUDIES</CorTitulo> </h1>

            <Texto>
                Learning English or any other foreign language develops significant areas of the brain 
and enhances the natural ability to focus and process information. Besides, it's a 
significant advantage in all areas of life. 
<Espaco/>
<Espaco/>
The recognition of English as a universal language has unlocked barriers and created 
important opportunities for those who dedicate themselves. A notable example in the 
academic sphere is exchange programs, which not only rely on English but undoubtedly 
played a crucial role in the evolution of these opportunities. 
<Espaco/>
<Espaco/>
Today, English is widely used in various fields such as technology, business, sciences, and 
has become a desirable skill for many employees. 
<Espaco/>
<Espaco/>
It's important to note that during the pandemic and post-pandemic, the main areas that 
stood out were information technologies. Professionals who were already trained, in 
training, or starting their studies in the field had the opportunity to enter the business 
environment, some even prematurely, to meet a need that arose at that moment and 
now solidifies as a new perspective on businesses. 
<Espaco/>
<Espaco/>
And to meet the demands of the aforementioned scenario, it's necessary for the 
student/future professional to have knowledge of the foreign language in order to 
understand programming languages, which are mostly conducted in English. The more 
fluent you are, the easier it will be to understand and engage in this ever-growing field. 
<Espaco/>
<Espaco/>
Lastly, it's important to understand that education opens important doors that can alter 
not only a young person's professional life but also the cultural, intellectual, and social 
aspects that learning a universal language can offer, thus changing the environment in 
which one lives. And most importantly, changing your relationship with the worldview. 
            </Texto>
        </ConteinerConteudo1>
        <ConteinerBotaoTroca>
        <BotaoTroca><Linktroca to ="/conteudo2">
        Next Content</Linktroca></BotaoTroca>
        </ConteinerBotaoTroca>
 

        
    </Conteiner>)
}
export default Conteudo1;