import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Detalhes_Da_Viagen = () => {

const navigate = useNavigate()

const vaiParaPainelAdmin = () => {
            navigate("/Painel_Admin")
}    


    return(
        <div>
            <h2> Olá, eu sou a tela de Detalhes das Viagens </h2>
            
            <button onClick={vaiParaPainelAdmin}> Voltar </button>
        </div>
    )
}

export default Detalhes_Da_Viagen;