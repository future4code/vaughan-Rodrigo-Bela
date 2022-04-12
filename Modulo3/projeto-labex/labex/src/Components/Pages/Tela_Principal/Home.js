import React from "react";
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
import styled from "styled-components";
import background from "../../Img/FundoLabeX.jpg";
import Rocket from "../../Img/rocket.gif";
import Logo from "../../Img/LogoLabeX.png";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Base = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  width: 100vw;
  height: 100%;
  align-items: center;
`;
const Foguete = styled.img`
  width: 200px;
  padding-top: 15vh;
`;
const Texto = styled.h2`
  font-size: 1.5rem;
  padding: 40px;
  color: #f58634;
  font-family: "Fugaz One", cursive;
`;
const StyleLogo = styled.img`
  width: 420px;
  padding-top: 6vh;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(2px 2px 2px #222);
`;
const DivBotao = styled.div`
  display: flex;
  padding: 20vh;
`;
const Botoes = styled.button`
  display: block;
  border-radius: 25px;
  border: none;
  width: 15vw;
  height: 5vh;
  color: white;
  background-color: #f58634;
  margin: 40px;
  font-size: large;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(2px 2px 2px #222);
`;

const Home = () => {
  const navigate = useNavigate();

  const vaiParaLogin = () => {
    navigate("/Login_Admin");
  };

  const vaiParaListaViagens = () => {
    navigate("/Lista_Viagens");
  };

  return (
    <Base>
      <StyleLogo src={Logo} />
      <Texto>
        {" "}
        Olá, e bem vindo(a) ao LabeX, o unico lugar na terra que pode te levar
        para fora dela,
        <br />
        como? basta acessar, criar sua viagem, pagar e partir...{" "}
      </Texto>
      <Foguete src={Rocket} alt="Infeite Foguete" />
      <DivBotao>
        <Botoes onClick={vaiParaListaViagens}> Viagens </Botoes>
        <Botoes onClick={vaiParaLogin}> Area do Admin </Botoes>
      </DivBotao>
    </Base>
  );
};

export default Home;
