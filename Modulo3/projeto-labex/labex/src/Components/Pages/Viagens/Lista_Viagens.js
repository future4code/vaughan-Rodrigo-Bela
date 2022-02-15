import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Lista_Viagens = () => {

const navigate = useNavigate()

const vaiParaHome = () => {
        navigate("/")
}
 
const vaiParaInscricao = () => {
            navigate("/Inscricao")
}

    return(
        <div>
            <h2> Olá, eu sou a Tela de Lista de Vigens </h2>
            <button onClick={vaiParaHome}> Voltar </button>
            <button onClick={vaiParaInscricao}> inscrever-se </button>
        </div>
    )
}

export default Lista_Viagens;