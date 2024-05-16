import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ConteinerNav = styled.nav`
  display: flex;
  height: 40px;
  width: 70rem;
  border-radius: 10px;
  background: linear-gradient(to right, #2228a4 40%, #000000 ); /* Gradiente linear de branco para preto */
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.263);
  transition: box-shadow 10s ease-in-out;
  `;

const ConteinerButoo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 300px;
  position: relative;
  bottom:15px;

  
`;

const Texto = styled.p`
  color: #ffffff;
  font-size: 30px;
  margin:0;
`;

const Lista = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const ConteinerText = styled.div`
display:flex;
align-items: center;
justify-content:center ;
   height: 40px;
   width: 400px;

   
   `

const LinkStyled = styled(Link)`

  text-decoration: none;
  font-size: 25px;
  color: #fffcfc;
  transition: 0.3s linear;
  &:hover{
    text-decoration: underline;
    color: #170bf1;
  }
`;

function Navegacao() {
  return (
    <ConteinerNav>
      <ConteinerText>
        <Texto>Speak Smart English</Texto>
      </ConteinerText>
      <ConteinerButoo>
        <Lista>
          <li>
            <LinkStyled to="/">home</LinkStyled>
          </li>
          <li>
            <LinkStyled to="/contatos">contacts</LinkStyled>
          </li>
        </Lista>
      </ConteinerButoo>
    </ConteinerNav>
  );
}

export default Navegacao;
