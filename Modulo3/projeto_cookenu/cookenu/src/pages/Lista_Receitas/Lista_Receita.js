import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Voltar from "../../assets/Voltar.png";
import Adicionar from "../../assets/Adicionar.png";
import Load from "../../assets/Load.gif";

const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 70vw;
  justify-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 8px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const BotoesHeader = styled.div` 
  justify-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
`

const FotoStyles = styled.img`
  width: 80%;
  border: 3px solid white;
  border-radius: 20px;
  box-shadow: 1px 1px 4px;

  @media screen and (max-width: 890px) {
    width: 80%;
    border: 2px solid white;
    border-radius: 15px;
    box-shadow: 1px 1px 4px;
  }
`;

const Card_Receitas = styled.div`
  display: grid;
  width: 15rem;
  border-radius: 20px;
  background-color: #fee6d6;
  box-shadow: 1px 0px 15px -5px rgba(0, 0, 0, 0.5);
  & :hover {
    box-shadow: 1px 0px 15px -5px rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 890px) {
    display: grid;
    width: 12rem;
    border-radius: 10px;
    background-color: #fee6d6;
    box-shadow: 1px 0px 15px -5px rgba(0, 0, 0, 0.5);
  }
`;

const Botao_Card = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const BotaoIcones = styled.button` 
  border: none;
  background: none;
  text-decoration: none;
  cursor: pointer;
& img {
  width: 40px;
}`

const Frase = styled.p`
  font-family: 'Allan', cursive;
  font-size: 1.7vh;
  color: black;
`;

const LoadStilo = styled.img` 
  width: 8vw;
  justify-items: center;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Texto = styled.p`
  font-family: 'Quattrocento Sans', sans-serif;
  font-size: 2vh;
  color: black;
`;

const Lista_Receita = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Precisa Autenticar");
      volta_Login();
    }

    axios
      .get("https://cookenu-api.herokuapp.com/recipe/feed", {
        headers: {
          Authorization: token,
        },
      })

      .then((response) => {
        setReceitas(response.data);
        
      })

      .catch((err) => {
        console.log("Erro ao buscar a lista:", err.message);
      });
  }, []);

  const navigate = useNavigate();

  const volta_Login = () => {
    navigate("/login");
  };

  const vai_Add_Receita = () => {
    navigate("/add_receita");
  };

  const vai_Detalhe_Receita = (id) => {
    navigate(`/detalhe_receita/${id}`);
  };

  const receitasCard = receitas.map((receita) => {
    return (
      <Card_Receitas>
        <Botao_Card onClick={() => vai_Detalhe_Receita(receita.recipe_id)}>
          <Frase> {receita.title} </Frase>
          <FotoStyles src={receita.image} />
        </Botao_Card>
      </Card_Receitas>
    );
  });

  return (

    <div>
       
      <BotoesHeader>
      <Texto> Lista de Receitas </Texto>
      
      <BotaoIcones onClick={volta_Login}>
        <img src={Voltar} /> Voltar
      </BotaoIcones>

      <BotaoIcones onClick={vai_Add_Receita}>
        <img src={Adicionar} /> Adicionar
      </BotaoIcones>
      </BotoesHeader>
      
      <Base>

      {receitasCard}
      <LoadStilo src={Load} />

      </Base>
      
    </div>
  );
};

export default Lista_Receita;
