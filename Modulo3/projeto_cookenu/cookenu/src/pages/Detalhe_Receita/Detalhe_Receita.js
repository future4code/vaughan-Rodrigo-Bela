import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Voltar from "../../assets/Voltar.png";

const Card_Detalhe = styled.div`
  text-align: center;
  height: auto;
  border-radius: 10px;
  width: 82vw;
  height: auto;
  padding: 5%;
  background-color: #fee6d6;

  & img {
    border-radius: 10px;
    height: auto;
    width: 60vw;
  }
`;

const BotaoIcones = styled.button` 
  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
& img {
  width: 40px;
}`

const Texto = styled.p`
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 1.7vh;
  color: black;
`;

const Detalhe_Receita = () => {
  const [detalhe, setDetalhe] = useState([]);

  const params = useParams();

  //--------------------------------------------------------------

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Precisa Autenticar");
      volta_Login();
    }

    axios
      .get(`https://cookenu-api.herokuapp.com/recipe/${params.id}`, {
        headers: {
          Authorization: token,
        },
      })

      .then((response) => {
        setDetalhe(response.data);
        console.log("Deu certo", response.data[0]);
      })

      .catch((err) => {
        console.log("Não consegui puxar o detalhe, motivo", err.message);
      });
  }, []);

  const navigate = useNavigate();
  const vai_Lista_Receitas = () => {
    navigate("/");
  };

  const volta_Login = () => {
    navigate("/login");
  };

  const receitasCardDetalhe = detalhe.map((detalheMapeado) => {
    return (
      <Card_Detalhe>
        <img src={detalheMapeado.image} />
        <Texto> {detalheMapeado.title} </Texto>
        <Texto> {detalheMapeado.description} </Texto>
      </Card_Detalhe>
    );
  });

  return (
    <>
      <Texto> Detalhes da Receita </Texto>
      <BotaoIcones onClick={vai_Lista_Receitas}>
      <img src={Voltar} /> Voltar
      </BotaoIcones>
      {receitasCardDetalhe}
    </>
  );
};

export default Detalhe_Receita;
