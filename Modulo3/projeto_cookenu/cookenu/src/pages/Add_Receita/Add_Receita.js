import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 150vw;
  max-width: 350px;
  margin: 20px;
`;

const Add_Receita = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagen, setImagem] = useState("");

  const armazenaTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const armazenaDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const armazenaImagen = (event) => {
    setImagem(event.target.value);
  };

  const navigate = useNavigate();
  const vai_Lista_Receitas = () => {
    navigate("/");
  };

  const volta_Login = () => {
    navigate("/login");
  };

  //________________________________________________________________

  const token = localStorage.getItem("token");
  if (token === null) {
    alert("Precisa Autenticar");
    volta_Login();
  }

  const fazCadastroPrato = (event) => {
    event.preventDefault();

    const body = {
      title: titulo,
      description: descricao,
      image: imagen,
    };

    axios
      .post("https://cookenu-api.herokuapp.com/recipe", body, {
        headers: {
          Authorization: token,
        },
      })
      .then((resp) => {
        alert("O cadastro da receita deu CERTO");
        // localStorage.setItem('token', resp.data.token )
      })
      .catch((err) => {
        alert("O cadastro da receita deu ERRADO", err.response);
      });
  };

  return (
    <>
      <FormStyle onSubmit={fazCadastroPrato}>
        <input
          placeholder="Titulo da Receita"
          type="text"
          value={titulo}
          onChange={armazenaTitulo}
          required
        />
        <input
          placeholder="Descrição"
          type="text"
          value={descricao}
          onChange={armazenaDescricao}
          required
        />
        <input
          placeholder="Link da imagen"
          type="link"
          value={imagen}
          onChange={armazenaImagen}
          required
        />
        <button> Fazer Cadastro </button>
      </FormStyle>

      <button onClick={vai_Lista_Receitas}>
        {" "}
        Voltar para Lista de Receitas{" "}
      </button>
    </>
  );
};

export default Add_Receita;
