import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import logo2 from "../../assets/Logo2.png";

const FormStyle = styled.form` 
    display: flex;
    flex-direction: column;
    width: 150vw;
    max-width: 350px;
    margin: 20px;
`

const Logo_Style2 = styled.img` 
    width: 80vw;
    max-width: 350px;
    padding: 80px;
`

const BotaoLimpo = styled.button` 
    border: none;
    color: #F5874F;
    background: none;
    text-decoration: none;
    cursor: pointer;
`

//------------------------------------------------------------------

const Login = () => {


const [email, setEmail] =  useState("");
const [senha, setSenha] = useState("");
    
const armazenaEmail = (event) => {
        setEmail(event.target.value);
}
    
const armazenaSenha = (event) => {
        setSenha(event.target.value);
}

const navigate = useNavigate()

const vai_Cadastro = () => {
        navigate("/cadastro")
}



//------------------------------------------------------------------

const fazlogin = (event) => {

    event.preventDefault()

    const body = {
        email: email,
        password: senha,
    }

    axios.post('https://cookenu-api.herokuapp.com/user/login', body)

    .then((resp) => {
        console.log('Deu certo, O Token é :', resp.data.token)
        localStorage.setItem('token', resp.data.token )
        alert("Sucesso")
        navigate("/")
    })
    .catch((err) => {
        console.log('Deu Errado', err.response)
        alert("Problema na Autenticação")
    })
}


//------------------------------------------------------------------

    return(

        <>
        <Logo_Style2 src={logo2} />
        <FormStyle onSubmit={fazlogin}>
        
        <input placeholder='Email' type="email" value={email} onChange={armazenaEmail} required/>
        <input placeholder='Senha' type="password" value={senha} onChange={armazenaSenha} pattern=".{6,}" title={"No mínimo 6 numeros"} required/>
        <button> Entrar </button>
        <BotaoLimpo onClick={vai_Cadastro}> Fazer cadastro </BotaoLimpo>
        </FormStyle>
        
        </>
    )
}

export default Login;