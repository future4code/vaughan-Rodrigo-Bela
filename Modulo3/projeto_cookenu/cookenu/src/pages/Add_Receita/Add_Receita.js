import React from 'react';
import { useNavigate } from "react-router-dom";

const Add_Receita = () => {

const navigate = useNavigate()
const vai_Lista_Receitas = () => {
        navigate("/")
}
    return(

        <>
        <h2> Eu sou o Adicionar Receita </h2>
        <button onClick={vai_Lista_Receitas}> Voltar para Lista de Receitas </button>
        </>
    )
}

export default Add_Receita;