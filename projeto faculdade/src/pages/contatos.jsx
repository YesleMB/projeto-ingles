import styled from "styled-components";
import Header from "../componentes/HEADER/header";
import {Conteiner,GlobalStyle} from "./index";
import {ConteinerMain,Titulo} from "../componentes/MAIN/main";
import CardComponent from "../componentes/CARDS/cards";

const ConteinerCOntatos = styled.div`
display: flex;
flex-wrap: wrap;



`



function Contatos() {
    return(
        <Conteiner>
            <GlobalStyle/>
            <Header/>
            <ConteinerCOntatos>
                <CardComponent/>
            

            </ConteinerCOntatos>

        </Conteiner>
    )


}

export default Contatos;