import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
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

const BotaoIcones = styled.button`
  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
  & img {
    width: 40px;
  }
`;
const Frase = styled.p`
  font-family: "Nothing You Could Do", cursive;
  font-size: 3vh;
  color: #f5874f;
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


  const limpaInput = () => {
    setTitulo("")
    setDescricao("")
    setImagem("")
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
        alert("Otimo, o cadastro da sua receita foi efetuado com Sucesso!");
        limpaInput()

      })
      .catch((err) => {
        alert("Ops, algo deu errado no cadastro, tente novamente em alguns instantes:",err.response);
      });
  };

  return (
    <Base>
      <Frase>
        {" "}
        Compartilhe sua receita favorita
        <br />e faça parte desta comunidade deliciosa.{" "}
      </Frase>
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
          placeholder="Cole aqui o Link da imagen do seu prato"
          type="link"
          value={imagen}
          onChange={armazenaImagen}
          required
        />

        <button className="BotaoCadastrar"> Fazer Cadastro </button>
      </FormStyle>
      <BotaoIcones onClick={vai_Lista_Receitas}>
        <img src={Voltar} /> Voltar para lista
      </BotaoIcones>
    </Base>
  );
};

export default Add_Receita;
