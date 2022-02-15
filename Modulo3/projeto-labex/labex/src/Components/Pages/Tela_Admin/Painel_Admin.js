import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Painel_Admin = () => {


const navigate = useNavigate()

const vaiParaLogin = () => {
        alert("Deslogado com Sucesso")
        navigate("/Login_Admin")
}
    
const vaiParaCriarViagens = () => {
        navigate("/Criar_Viagens")
}

const vaiParaDetalhesDaViagem = () => {
    navigate("/Detalhes_Da_Viagen")
}
    return(
        <div>
            <h2> Olá, eu sou a tela de Painel do Administrativo após logado </h2>
            
            <button onClick={vaiParaLogin}> Voltar </button>
            <button onClick={vaiParaCriarViagens}> Criar Viagem </button>
            <button onClick={vaiParaLogin}> Logout </button>
            
            
            <div>
            <br />
            <br />
            <button onClick={vaiParaDetalhesDaViagem}>
            <h2> Viagem tal de Exemplo </h2>
            <h2> Descrição tal </h2>
            <h3> descrição tal 12345 </h3>
            </button>
            </div>
        </div>
    )
}

export default Painel_Admin;