import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "../components/Header/Header";


import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import Detalhe_Receita from '../pages/Detalhe_Receita/Detalhe_Receita';
import Lista_Receitas from '../pages/Lista_Receitas/Lista_Receita';
import Add_Receita from '../pages/Add_Receita/Add_Receita';
import Erro from '../pages/Erro/Erro';



const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>

                <Route path={"/login"} element={<Login />} exact />

                <Route path={"/cadastro"} element={<Cadastro />} exact />

                <Route path={"/detalhe_receita/:id"} element={<Detalhe_Receita />} exact />

                <Route path={"/"} element={<Lista_Receitas />} exact />

                <Route path={"/add_receita"} element={<Add_Receita />} exact />

                <Route path={"*"} element={<Erro />} exact />

            </Routes>
        </BrowserRouter>
    )
}

export default Router;