import {Conteiner,GlobalStyle} from "./index";
import Header from "../componentes/HEADER/header";
import {ConteinerMain,Texto,Espaco,CorTitulo,Linktroca,ConteinerBotaoTroca,BotaoTroca} from "../componentes/MAIN/main";
import styled from "styled-components";

const ConteinerConteudo4 = styled(ConteinerMain)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50rem;
`
function Conteudo4(){
    return(
        <Conteiner>
            <GlobalStyle/>
            <Header/>
                <ConteinerConteudo4>
                    <h1><CorTitulo>IMPORTANCE OF ENGLISH IN WORK</CorTitulo> </h1>
                     <Texto>
                     Regarding the Technology field, the presence of English is so pervasive that any attempt 
to separate it would be futile. This is due to the fact that the earliest computers, 
programming languages, and software originated in the USA. Thus, it's fully embedded 
in technology from the inception of the modern era of computing, which began in the 
1940s. 
<Espaco/>
<Espaco/>
The first modern programming languages, such as Fortran, Lisp, and Cobol, were created 
by US scientists and became the standard for coding software systems. Besides syntax, 
the documentation of these computational languages is entirely in English, making basic 
knowledge of this language a prerequisite for learning and using them. Nowadays, the 
most widely used computational languages globally, such as C, C++, C#, Java, PHP, HTML, 
and CSS, have syntax and documentation entirely in English. Other languages and 
notations used in the context of technology are also specified entirely through this 
language.
<Espaco/>
<Espaco/> 
For professionals in this field, learning English is even more crucial than expected, as 
Technology is oriented towards globalized technological procedures, meaning the 
language also revolves around English terms. 
<Espaco/>
<Espaco/>
In the job market, vocabularies are unique and universal, and many of the words and 
terms used in English for the IT (Information Technology) sector are interconnected. 
Therefore, it's not sufficient to merely translate these words and attempt to understand 
their meaning but to comprehend the entirety. Among the primary terms such as 
Application, database, function, procedure, package, web browser, software, for 
instance, when applying each of these terms to your work, you need to understand not 
only their translation but also their application. It's also worth noting that if a 
professional in any technology-related field wishes to work abroad or in a large IT 
company in Brazil, English becomes indispensable for success. In addition to learning 
new technologies and attending training courses, communication with international 
colleagues and clients is conducted in English. 
<Espaco/>
<Espaco/>
Hence, to seize the best opportunities, mastering the language is essential. 
<Espaco/>
<Espaco/>
<h3>The endless story / Evolution of computers </h3>
The idea of computers emerged long ago as a means to optimize tasks, calculations, and 
speed up data processing. When we delve into the history of computers, we realize how 
incredible it is that today we carry in our hands such small computers with such a variety 
of functionalities - after all, cell phones are essentially mini computers - that would have 
been unimaginable to the pioneers of these machines. New technologies, such as 
quantum computing and the enhancement of Artificial Intelligences (AIs), are on the 
horizon, promising to further revolutionize the way we think about computers and data 
processing for a better future. However, to reach this reality, it was necessary to go 
through studies from the first generation to the most recent modern sixth generation, 
in which programming languages underwent a remarkable evolution, driving the 
creation of increasingly advanced and efficient systems. 
<Espaco/>
<Espaco/>
<b>1st Generation: Machine Language</b> - Programming directly in machine language, 
composed of 0s and 1s, a difficult and error-prone programming that is remembered as 
the language of computer pioneers. 
<Espaco/>
<Espaco/>
<b>2nd Generation: Assembly Language </b>- Introduction of mnemonics and symbols to 
facilitate programming at the machine level, but still complex and dependent on 
hardware architecture. 
<Espaco/>
<Espaco/>
<b>3rd Generation: High-Level Languages</b> - Languages such as C, C++, Java, and Python 
simplified development, made code more readable, and brought programming closer to 
human language. 
<Espaco/>
<Espaco/>
<b>4th Generation: Low-Code Platforms</b> - Emergence of low-code platforms, such as 
Genexus, which allow for rapid application development through visual interfaces and 
data modeling. 
<Espaco/>
<Espaco/>
<b>5th and 6th Generation: Artificial Intelligences</b> - Languages driven by advanced AI, 
capable of learning, understanding natural language, and generating code 
autonomously. They simplify development by automating complex tasks, making work 
more accessible and agile.
<Espaco/>
<Espaco/>
The first processor released on a silicon chip worked with 4 bits and had a clock speed 
of 0.78 MHz. The 8086 was the first processor to realize its full potential, with a clock 
speed of 5MHz using real 16-bit logical instructions. The first personal microcomputer 
released by IBM had a clock speed of 4.77MHz, an Intel 8088 microprocessor, and used 
the MS-DOS operating system. It became the best-selling computer in history. 
In light of this, it is evident that true magic happens when the 4th generation, 
represented by Genexus, integrates with the 5th and 6th generations driven by AI. 
Genexus, with its code generation capability and intuitive configuration, may be the 
ideal platform to maximize the benefits of artificial intelligence, further automating the 
development process and increasing efficiency. 
<Espaco/>
<Espaco/>
The evolution of programming languages, from the 1st generation to the current 6th 
generation, is a story of innovation and simplification. Low-code platforms like Genexus 
represent a crucial step in this evolution, making application development faster and 
more accessible. When combined with the artificial intelligences of the 5th and 6th 
generations, they promise to revolutionize how we create software even further. This 
integration leads us to an exciting future where application development will be more 
efficient than ever, freeing up more time for innovation and what truly matters. 
                    </Texto>
                </ConteinerConteudo4>
                <ConteinerBotaoTroca>
        <BotaoTroca><Linktroca to ="/conteudo3">
        back Content</Linktroca></BotaoTroca>

        </ConteinerBotaoTroca>
        </Conteiner>)}
export default Conteudo4;