import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
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

const Cadastro = () => {


const navigate = useNavigate()
const vai_Login = () => {
        navigate("/login")
}
    return(

        <>
        <Logo_Style2 src={logo2} />
        <FormStyle>
        <h2> Eu sou o Cadastro </h2>
        <input placeholder='Nome' type="text"/>
        <input placeholder='E-mail' type="email"/>
        <input placeholder='Senha' type="password"/>
        <button > Fazer Cadastro </button>
        <button onClick={vai_Login}> Voltar para Login </button>
        </FormStyle>
        </>
    )
}

export default Cadastro;