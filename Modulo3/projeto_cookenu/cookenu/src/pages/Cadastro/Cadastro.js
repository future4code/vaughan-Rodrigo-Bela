import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo2 from "../../assets/Logo2.png";

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 150vw;
  max-width: 350px;
  margin: 20px;
`;

const Logo_Style2 = styled.img`
  width: 80vw;
  max-width: 350px;
  padding: 80px;
`;

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const armazenaNome = (event) => {
    setNome(event.target.value);
  };

  const armazenaEmail = (event) => {
    setEmail(event.target.value);
  };

  const armazenaSenha = (event) => {
    setSenha(event.target.value);
  };

  const navigate = useNavigate();
  const vai_Login = () => {
    navigate("/login");
  };
  //________________________________________________________________
  const fazCadstro = (event) => {
    event.preventDefault();

    const body = {
      name: nome,
      email: email,
      password: senha,
    };

    axios
      .post("https://cookenu-api.herokuapp.com/user/signup", body)

      .then((resp) => {
        alert("O cadastro deu CERTO");
        // localStorage.setItem('token', resp.data.token )
      })
      .catch((err) => {
        console.log("O cadastro deu ERRADO", err.response);
      });
  };

  return (
    <>
      <Logo_Style2 src={logo2} />
      <FormStyle onSubmit={fazCadstro}>
        <input
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={armazenaNome}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={armazenaEmail}
          required
        />
        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={armazenaSenha}
          pattern=".{6,}"
          title={"No mínimo 6 numeros"}
          required
        />
        <button> Fazer Cadastro </button>
      </FormStyle>
      <button onClick={vai_Login}> Voltar para Login </button>
    </>
  );
};

export default Cadastro;
