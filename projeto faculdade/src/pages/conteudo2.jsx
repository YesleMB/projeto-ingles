import {Conteiner,GlobalStyle} from "./index";
import Header from "../componentes/HEADER/header";
import {ConteinerMain,Texto,Espaco, CorTitulo,ConteinerBotaoTroca,Linktroca,BotaoTroca} from "../componentes/MAIN/main";
import styled from "styled-components";

const ConteinerConteudo1= styled(ConteinerMain)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50rem;

`

function Conteudo2(){
    return(
        <Conteiner>
            <GlobalStyle/>
            <Header/>
            <ConteinerConteudo1>  
               <h1><CorTitulo>IMPORTANCE OF ENGLISH IN TOURISM </CorTitulo>
</h1>
                <Texto>
                    As for tourism, English is a valuable tool for professionals in various fields, especially in 
sectors like tourism, where its role is crucial for international success. Let's explore how 
English knowledge is fundamental for professionals in specific sectors, detailing its 
impact on international tourism, customer service, and promotion of international 
destinations and attractions. 
<Espaco/>
<Espaco/>
English is a valuable tool for professionals in a variety of fields, especially in sectors like 
tourism, where its role is crucial for international success. Proficiency in English enables 
professionals in these sectors to stand out and achieve success on the global stage. Let's 
explore how English proficiency is fundamental for professionals in specific sectors, 
detailing its impact on international tourism, customer service, and the promotion of 
international destinations and attractions. 
<Espaco/>

<h3>International Tourism: English as the Language of Hospitality </h3>

In the tourism sector, deeply affected by globalization, English has emerged as the 
standard language. It facilitates communication between industry professionals and 
international tourists, being essential for tour guides, travel agents, and hotel managers. 
Proficiency in English is not just preferable but often necessary to provide quality service 
and maintain competitiveness in the market. 
<h3>Customer Service and Tourist Experience </h3>
The tourist experience is central to success in the tourism sector. Professionals who 
directly interact with customers, such as hotel receptionists and tourist information 
staff, must possess advanced English skills. This ensures that tourists have a positive 
experience, facilitating communication and assistance during their stay, regardless of 
visitors' nationalities. 
<Espaco/>
 <h3>Promotion of International Destinations and Attractions </h3>
The effective promotion of destinations and tourist attractions internationally requires 
well-crafted and culturally relevant marketing campaigns. English dominates as the 
communication language in these campaigns, whether on digital platforms like websites 
and social media or in printed materials or promotional videos. Marketing professionals 
in tourism who master English can create engaging content that resonates with a diverse 
and global audience. 
<Espaco/>
<Espaco/>
Universal Communication: English is often used as a lingua franca in international 
contexts, including tourism. This means that in many countries, signs, tourist 
information, restaurant menus, and other guidance are frequently available in English, 
in addition to local languages. 
<Espaco/>
<Espaco/>
Ease of Travel: For tourists traveling to countries where they do not speak the local 
language, knowing English can significantly facilitate the trip. This includes interactions 
such as checking into hotels, asking for directions, shopping, and dealing with 
emergencies. 
<Espaco/>
<Espaco/>
Access to Services: In many tourist destinations, service sector employees, such as 
hotels, restaurants, and tourist attractions, are trained to communicate in English. This 
helps ensure that tourists can access services efficiently and enjoy their travel 
experiences without major language barriers. 
<Espaco/>
<Espaco/>
Information and Resources: Much essential travel information is published in English. 
This includes travel guides, tourist recommendation websites, informative brochures, 
and travel applications. Mastering English allows travelers to access a rich source of 
information to plan and enjoy their trips. 
<Espaco/>
<Espaco/>
Employability in the Tourism Sector: For professionals working in tourism, English is 
often an essential requirement. This applies to a variety of roles, from tour guides and 
travel agents to airline and hotel employees. English proficiency can open many career 
doors and enable serving a wider and more diverse clientele. 
<Espaco/>
<Espaco/>
Marketing and Promotion: The promotion of tourist destinations, experiences, and 
packages is often done in English to reach a global audience. English enables tourism 
companies to effectively communicate with potential tourists from various parts of the 
world. 
<Espaco/>
<Espaco/>
Mastering English is indispensable for professionals in the tourism sector, which is 
increasingly integrated into the global landscape. This linguistic competence transcends 
borders and is crucial for conducting effective interactions, fruitful collaborations, and 
professional success on an international scale. Therefore, investing in improving English 
is essential and constitutes a direct investment in the professional trajectory in dynamic 
and competitive sectors. Taking advantage of the opportunities that English offers is an 
integral part of professional development in today's globalized world.
                </Texto>
            </ConteinerConteudo1>
            <ConteinerBotaoTroca>
        <BotaoTroca><Linktroca to ="/conteudo1">
        back Content</Linktroca></BotaoTroca>

        <BotaoTroca><Linktroca to ="/conteudo3">
        Next content</Linktroca></BotaoTroca>
        </ConteinerBotaoTroca>
   
        </Conteiner>)
        }
export default Conteudo2;