import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Inscricao = () => {

const navigate = useNavigate();

const vaiParaListaViagens = () => {
    navigate("/Lista_Viagens");
  };

const mensagem = () => {
  return alert("Viagem Cadastrada com sucesso. SQN =/")
}
  return (
    <div>
      <h2> Olá, eu sou a Tela de inscrição de Viagens </h2>
      <input placeholder="Planeta" />
      <input placeholder="Nome" />
      <input placeholder="Idade" />
      <input placeholder="Texto de Candidatura" />
      <input placeholder="Profissão" />
      <input placeholder="Escolha um pais" />
      <button onClick={vaiParaListaViagens}> Voltar </button>
      <button onClick={mensagem}> Cadastrar </button>
    </div>
  );
};

export default Inscricao;
