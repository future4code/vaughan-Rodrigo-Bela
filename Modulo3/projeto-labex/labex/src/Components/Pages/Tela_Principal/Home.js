import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

const Home = () => {

const navigate = useNavigate()

const vaiParaLogin = () => {
    navigate("/Login_Admin")
}

const vaiParaListaViagens = () => {
    navigate("/Lista_Viagens")
}

    return(
        <div>
            <h2> Olá, eu sou a Home Page </h2>
            <button onClick={vaiParaListaViagens}> Viagens </button>
            <button onClick={vaiParaLogin}> Area do Admin </button>
        </div>
    )
}

export default Home;





 
    
