import axios from 'axios';
import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
import { useState, useEffect } from 'react';
// import styled from 'styled-components';

const Login_Admin = () => {

const [email, setEmail] =  useState("");
const [senha, setSenha] = useState("")

const armazenaEmail = (event) => {
    setEmail(event.target.value);
}

const armazenaSenha = (event) => {
    setSenha(event.target.value);
}

const navigate = useNavigate()

const vaiParaHome = () => {
        navigate("/")
}

const fazlogin = () => {

    const body = {
        email: email,
        password: senha,
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-brito/login', body)

    .then((resp) => {
        console.log('Deu certo, O Token é :', resp.data.token)
        localStorage.setItem('token', resp.data.token )
        alert("Sucesso")
        navigate("/Painel_Admin")
    })
    .catch((err) => {
        console.log('Deu Errado', err.response)
        alert("Problema na Autenticação")
    })
}

    return(

        <div>
            <h2> Olá, eu sou a tela de Login do Administrador </h2>
            <input placeholder='E-mail' type="email" value={email} onChange={armazenaEmail}/>
            <input placeholder='Senha' type="password" value={senha} onChange={armazenaSenha}/>
            <button onClick={vaiParaHome}> Voltar </button>
            <button onClick={fazlogin}> Entrar </button>
        </div>
    )
}

export default Login_Admin;