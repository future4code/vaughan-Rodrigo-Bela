import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import logo2 from "../../assets/Logo2.png";
import Voltar from "../../assets/Voltar.png";

const Base = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  & input {
    height: 35px;
    margin: 10px 5px 0px 10px;
  }

  & .BotaoCadastrar {
    height: 35px;
    background-color: #faaf7a;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 0px 15px -5px rgba(0, 0, 0, 0.5);
    margin: 15px;
    color: white;
    cursor: pointer;
  }
`;

const Logo_Style2 = styled.img`
  max-width: 1rem;
  min-width: 40vw;
  padding: 50px;
`;

const BotaoIcones = styled.button`
  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
  & img {
    width: 40px;
  }
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

  const limpaInput = () => {
    setNome("")
    setEmail("")
    setSenha("")
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
        alert("Otimo, o cadastro do perfil foi efetuado com Sucesso!");
        limpaInput();
      })
      .catch((err) => {
        console.log("Ops, algo deu errado no cadastro do perfil, tente novamente em alguns instantes:",err.response, err.response);
      });
  };

  return (
    <Base>
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

        <button className="BotaoCadastrar"> Fazer Cadastro </button>
      </FormStyle>
      <BotaoIcones onClick={vai_Login}>
        <img src={Voltar} /> Voltar
      </BotaoIcones>
    </Base>
  );
};

export default Cadastro;
