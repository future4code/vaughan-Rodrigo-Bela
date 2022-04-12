import axios from "axios";
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";  //(Switch foi subtituido por Routes)
import { useNavigate } from "react-router-dom"; //(History foi substituido por navigate)
// import { useState, useEffect } from "react";
// import styled from 'styled-components';

const Detalhes_Da_Viagen = () => {
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/rodrigo-brito/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log("Não trouxe: ", err.response);
      });
  }, []);

  const navigate = useNavigate();

  const vaiParaPainelAdmin = () => {
    navigate("/Painel_Admin");
  };

  return (
    <div>
      <h2> Olá, eu sou a tela de Detalhes das Viagens </h2>

      <button onClick={vaiParaPainelAdmin}> Voltar </button>
    </div>
  );
};

export default Detalhes_Da_Viagen;
