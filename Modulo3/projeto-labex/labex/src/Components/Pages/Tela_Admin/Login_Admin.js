import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Login_Admin = () => {

const navigate = useNavigate()

const vaiParaHome = () => {
        navigate("/")
}

const vaiParaPainelAdm = () => {
    alert(" Logado com Sucesso!!! ")
    navigate("/Painel_Admin")
}

    return(

        <div>
            <h2> Olá, eu sou a tela de Login do Administrador </h2>
            <input placeholder='E-mail' />
            <input placeholder='Senha' />
            <button onClick={vaiParaHome}> Voltar </button>
            <button onClick={vaiParaPainelAdm}> Entrar </button>
        </div>
    )
}

export default Login_Admin;