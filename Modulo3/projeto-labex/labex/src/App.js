import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Tela_Principal/Home";
import Lista_Viagens from "./Components/Pages/Viagens/Lista_Viagens";
import Inscricao from "./Components/Pages/Viagens/Inscricao";
import Login_Admin from "./Components/Pages/Tela_Admin/Login_Admin";
import Painel_Admin from "./Components/Pages/Tela_Admin/Painel_Admin";
import Detalhes_Da_Viagen from "./Components/Pages/Tela_Admin/Detalhes_Da_Viagen";
import Criar_Viagens from "./Components/Pages/Tela_Admin/Criar_Viagens";


const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  return (
    <Base>
      <BrowserRouter>
        <Routes>

          <Route path={"/"} element={<Home />} exact />
          <Route path={"/Lista_Viagens"} element={<Lista_Viagens />} exact />
          <Route path={"/Inscricao"} element={<Inscricao />} exact />
          <Route path={"/Login_Admin"} element={<Login_Admin />} exact />
          <Route path={"/Painel_Admin"} element={<Painel_Admin />} exact />
          <Route path={"/Detalhes_Da_Viagen"} element={<Detalhes_Da_Viagen />} exact />
          <Route path={"/Criar_Viagens"} element={<Criar_Viagens />} exact />

        </Routes>
      </BrowserRouter>
    </Base>
  );
}

export default App;
