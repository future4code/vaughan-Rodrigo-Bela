import React from 'react';

const Detalhe_Receita = () => {


const navigate = useNavigate()
const vai_Lista_Receitas = () => {
        navigate("/")
}

    return(

        <>
       <h2>  Eu sou o Detalhe da Receita </h2>
       <button onClick={vai_Lista_Receitas}> Voltar para Lista de Receitas </button>
        </>
    )
}

export default Detalhe_Receita;