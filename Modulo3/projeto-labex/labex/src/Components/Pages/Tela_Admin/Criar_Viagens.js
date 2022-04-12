import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Criar_Viagens = () => {

const navigate = useNavigate()

const vaiParaPainelAdmin = () => {
        navigate("/Painel_Admin")
}
        
const criaViagem = () => {
        alert("Viagem Criada com Sucesso!!!")
}

    return(
        <div>
            <h2> Olá, eu sou a tela de Criar Viagens </h2>
            <input placeholder='Nome'/>
            <input placeholder='Escolha um planeta'/>
            <input placeholder="   /   /   "/>
            <input placeholder='Descrição'/>
            <input placeholder='Duração em dias'/>
            <button onClick={vaiParaPainelAdmin}> Voltar </button>
            <button onClick={criaViagem}> Criar </button>
        </div>
    )
}

export default Criar_Viagens;