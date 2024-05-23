import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { CgAirplane } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { MdWork } from "react-icons/md";


const IconeF = styled(FaBook)`
width: 3rem;
height: 3rem;
`
const IconeC = styled(CgAirplane)`
width: 3rem;
height: 3rem;  
`
const IconeIo = styled(IoGameController)`
width: 3rem;
height: 3rem; 
`
const IconeMd = styled(MdWork)`
width: 3rem;
height: 3rem; 
`


const ConteinerPrinc = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10rem;
  @media (max-width:700px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Conteiner = styled.div`
  display: flex;
  position: relative;
`;

const BotaoGrandeStyled = styled(motion.button)`
  height: 100px;
  width: 100px;
  background-color: #f4f4f7;
  border-radius: 50%;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #1920a6;
  }
`;

const BalaoTexto = styled(motion.div)`
  height: 85px;
  width: 105px;
  position: absolute;
  top: 5%;
  left: 160px;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #f8f8f8;
  padding: 8px;
  border-radius: 5px;
`;

const Botoes = {
  botao1: {
    componente: <BotaoGrandeStyled><IconeF/></BotaoGrandeStyled>,
    texto:"importance of English in studis",
    conexao: "/conteudo1",
  },
  botao2: {
    componente: <BotaoGrandeStyled><IconeC/></BotaoGrandeStyled>,
    texto: "Importance of English in Tourism",
    conexao: "/conteudo2",
  },
  botao3: {
    componente: <BotaoGrandeStyled><IconeIo/></BotaoGrandeStyled>,
    texto: "Importance of English in Games",
    conexao: "/conteudo3",
  },
  botao4: {
    componente: <BotaoGrandeStyled><IconeMd/></BotaoGrandeStyled>,
    texto: "Importance of English in work",
    conexao: "/conteudo4",
  },
};

const BotaoComTexto = () => {
  const [showBalao, setShowBalao] = useState({
    botao1: false,
    botao2: false,
    botao3: false,
  });
  const [balaoTexto, setBalaoTexto] = useState("");

  const handleClickBotao = (chave, texto, conexao) => {
    setBalaoTexto(texto);
    setShowBalao((prevState) => ({
      ...prevState,
      [chave]: true,
    }));
    setTimeout(() => {
      setShowBalao((prevState) => ({
        ...prevState,
        [chave]: false,
      }));
      setBalaoTexto("");
    }, 2000);
  };

  return (
    <ConteinerPrinc>
      {Object.entries(Botoes).map(([chave, { componente, texto, conexao }], index) => (
        <div key={index} onClick={() => handleClickBotao(chave, texto, conexao)}>
          <Conteiner>
            {componente}
            {showBalao[chave] && (
              <BalaoTexto>
                {balaoTexto}
                <br/>
                <Link to={conexao}>Find out more</Link>
              </BalaoTexto>
            )}
          </Conteiner>
        </div>
      ))}
    </ConteinerPrinc>
  );
};

export default BotaoComTexto;
