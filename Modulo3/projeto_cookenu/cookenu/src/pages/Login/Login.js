import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import logo2 from "../../assets/Logo2.png";
import CozPc from "../../assets/CozPc.png";
import CozSp from "../../assets/CozSp.png";

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
  min-width: 10vw;
  height: auto;
  & input {
    height: 35px;
    margin: 5px;
  }
`;

const Logo_Style2 = styled.img`
  width: 80vw;
  max-width: 350px;
  padding: 80px;
`;

const BotaoLimpo = styled.button`
  border: none;
  color: #f5874f;
  background: none;
  text-decoration: none;
  cursor: pointer;
`;

// const Desenho = styled.div`
//   background-image: url('../../assets/CozPc.png');
// `;

//------------------------------------------------------------------

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const armazenaEmail = (event) => {
    setEmail(event.target.value);
  };

  const armazenaSenha = (event) => {
    setSenha(event.target.value);
  };

  const navigate = useNavigate();

  const vai_Cadastro = () => {
    navigate("/cadastro");
  };

  //------------------------------------------------------------------

  const fazlogin = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: senha,
    };

    axios
      .post("https://cookenu-api.herokuapp.com/user/login", body)

      .then((resp) => {
        console.log("Deu certo, O Token é :", resp.data.token);
        localStorage.setItem("token", resp.data.token);
        alert("Sucesso");
        navigate("/");
      })
      .catch((err) => {
        console.log("Deu Errado", err.response);
        alert("Problema na Autenticação");
      });
  };

  //------------------------------------------------------------------

  return (
    <Base>
      <Logo_Style2 src={logo2} />
      <p> Boas receitas nunca esteve tão facil </p>
      <FormStyle onSubmit={fazlogin}>
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
        <button> Entrar </button>
        <BotaoLimpo onClick={vai_Cadastro}> Fazer cadastro </BotaoLimpo>

        <Logo_Style2 src={CozPc} />
        <Logo_Style2 src={CozSp} />
      </FormStyle>
    </Base>
  );
};

export default Login;
