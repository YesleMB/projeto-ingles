import {Conteiner,GlobalStyle} from "./index";
import Header from "../componentes/HEADER/header";
import {Texto,Espaco,CorTitulo,ConteinerBotaoTroca,BotaoTroca,Linktroca} from "../componentes/MAIN/main";
import styled from "styled-components";
const ConteinerConteudo1= styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50rem;
@media (max-width: 700px) {
    width: 25rem;
}

`


function Conteudo3(){
    return(
        <Conteiner>
            <GlobalStyle/>
            <Header/>
            <ConteinerConteudo1>
                <h1><CorTitulo>IMPORTANCE OF ENGLISH IN GAMES</CorTitulo> </h1>
                
            <Texto>The importance of English in gaming technology is significant for several reasons. Firstly, 
many games are developed in English-speaking countries, making English the standard 
language for interfaces and technical documentation. Additionally, English is the lingua 
franca of global communication, especially in the technology world, where development 
teams, engineers, and specialists are located in different parts of the world. 
<Espaco/>
<Espaco/>
In an educational context, using electronic games to teach English has proven to be an 
effective tool as games greatly pique students' interest and attention, facilitating the 
learning process. Games that contain many dialogues, such as RPGs (Role-playing 
games), are particularly advantageous for learning English as they require understanding 
the context to progress in the game. 
<Espaco/>
<Espaco/>
Furthermore, English's presence in technology is so intense that it would be nearly 
impossible to separate this language from technology. Therefore, having knowledge of 
English can open doors to a better understanding and enjoyment of games, as well as 
enable participation in global gaming communities, where English is commonly used as 
a means of communication. 
<Espaco/>
<Espaco/>
In summary, English is essential in gaming technology not only for playing and deeply 
understanding games but also for engaging with the global community of gamers and 
industry professionals.
<Espaco/>
<Espaco/> 
In light of this, learning a new language requires a general change in habits, not only 
attention and focus on studies, but also variety and diversification in details, such as: 
listening to English music, changing the settings of your phone and computer to English, 
watching movies and series in English, thus making your entire environment conducive 
to effective learning. 
<Espaco/>
<Espaco/>
Therefore, stepping out of your comfort zone, even if it's possible to play in Portuguese, 
opt to play in English, because besides having fun, this will also expand your vocabulary 
and language skills. 
<Espaco/>
<Espaco/>
Previously, games contributed to the development of reading and listening skills. Now, 
they also promote speaking and writing, which stimulates the use of English even more. 
For example, Duolingo itself, a language learning app for various languages, encourages 
users to practice vocabulary, grammar, listening, and pronunciation, focusing on 
everyday experiences that would be useful in real situations in another country. All of 
this is created through the Scala programming language. 

         </Texto>
            </ConteinerConteudo1>
            <ConteinerBotaoTroca>
        <BotaoTroca><Linktroca to ="/conteudo2">
        back Content</Linktroca></BotaoTroca>

        <BotaoTroca><Linktroca to ="/conteudo4">
        Next content</Linktroca></BotaoTroca>
        </ConteinerBotaoTroca>
         
        </Conteiner>)}
export default Conteudo3;