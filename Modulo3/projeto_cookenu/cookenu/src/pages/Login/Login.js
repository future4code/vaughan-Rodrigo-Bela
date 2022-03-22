import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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

  & input {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    max-width: 100rem;
    margin: 10px 5px 0px 10px;
  }

  & .BotaoLogar {
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

const BotaoLimpo = styled.button`
  border: none;
  color: #f5874f;
  background: none;
  text-decoration: none;
  cursor: pointer;
`;

const Frase = styled.p`
  font-family: "Nothing You Could Do", cursive;
  font-size: 3vh;
  color: #f5874f;
`;

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

  const limpaInput = () => {
    setEmail("")
    setSenha("")
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
        localStorage.setItem("token", resp.data.token);
        alert("Otimo, logado com Sucesso!");
        limpaInput()
        navigate("/");
      })
      .catch((err) => {
        alert("Ops, algo deu Errado com o login", err.response);
      });
  };

  //------------------------------------------------------------------

  return (
    <Base>
     
      <Logo_Style2 src={logo2} />
      <Frase> Boas receitas nunca esteve tão facil! </Frase>
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
        <button className="BotaoLogar"> Entrar </button>
        <BotaoLimpo onClick={vai_Cadastro}> Fazer cadastro </BotaoLimpo>

        <picture>
          <source media="(max-width: 890px)" srcset={CozSp} type="image/png" />
          <source media="(max-width: 1050px)" srcset={CozPc} type="image/png" />
          <Logo_Style2 src={CozPc} alt="imagem de pc ou celular" />
        </picture>
      </FormStyle>
      
    </Base>
  );
};

export default Login;
