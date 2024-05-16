import React from 'react';
import styled from 'styled-components';
import Fotow from './image/fotowes.jpg';
import fotovic from './image/fotovic.jpg';
import fotocarlos from './image/fotocarlos.jpg';
import fotobrenda from './image/fotobrenda.jpg';
import fotocris from './image/fotocris.png';
import fotoleo2 from './image/fotoleo2.jpg';
import fotodaniel from './image/fotodaniel.jpg';
import fotonoe from './image/fotonoe.jpg';
import fotomiguel from './image/fotomiguel.jpg';
import fotobeatriz from './image/fotobeatriz.png';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  padding: 15px;
  gap: 10px;
`;

const Card = styled.div`
  height: 37rem;
  width: 32rem;
  border-radius: 5%;
  border: 1px solid;
  background-color: #2828c7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;
  &:hover{
    background-color: #bfc1c1;
  }  
  @media (max-width:700px){
    width: 24rem;
    height: 30rem;
  }
`;
const CardImagem = styled.div`
  display: flex;
  align-items: center;
  height:20rem;
  width: 20rem;
  position :relative;
  bottom: 50px;
  @media (max-width:700px){
    width: 18rem;
    height: 18rem;
    bottom: 0px;

  }

`

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
    border-radius: 100%;
`;
const Nome = styled.h1`
font-size: 25px;

`

const Cards = [
  { cartao1: { texto: 'Ciência Da Computação', foto: Fotow, titulo:"Wesley Mendes Barboza" } },
  { cartao2: { texto: 'Análise e desenvolvimento de sistemas', foto: fotovic,titulo:"Victoria Branco de Matos"}},
  { cartao3: { texto: 'Análise e desenvolvimento de sistemas',foto: fotobrenda, titulo: "Brenda Mathias da Silva"} },
  { cartao4: { texto: 'Gestão da Tecnologia da Informação' ,foto: fotocarlos,titulo: "Carlos Augusto Muraro Amaral"} },
  { cartao5: { texto: 'Gestão de TI' ,foto: fotodaniel,titulo:"Daniel Florindo Souza"} },
  { cartao6: { texto: 'Análise e desenvolvimento de sistemas',foto: fotoleo2, titulo:"Leonardo Soares Garcia" } },
  { cartao7: { texto: 'Ciências Contábeis',foto: fotocris,titulo:"Cristiane Barreto de Souza" } },
  { cartao8: { texto: 'Ciência Da Computação',foto: fotomiguel, titulo:"Miguel Azevedo Silva" } },
  { cartao9: { texto: 'Ciências Contábeis',foto: fotonoe, titulo:"Noé Pericles Gonçalves Cordeiro" } },
  { cartao10: { texto: 'Ciências Contábeis',foto: fotobeatriz, titulo:"Beatriz Cassiano Gomes" } },
  { cartao11: { texto: 'Texto 11' } },
];

function CardComponent() {
  return (
    <CardContainer>
      {Cards.map((cartao, index) => (
        <Card key={index}>
            <CardImagem>
              <Imagem src={cartao[Object.keys(cartao)[0]].foto} alt="Imagem do Card" />
            </CardImagem>
          <Nome>{cartao[Object.keys(cartao)[0]].titulo}</Nome>  
          <h3>curso: <b>{cartao[Object.keys(cartao)[0]].texto}</b></h3>
        </Card>
      ))}
    </CardContainer>
  );
}

export default CardComponent;

