import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  width: 70vw;
  justify-items: center;
`;

const FotoStyles = styled.img`
  width: 15vw;
  height: 10vh;
`;

const Card_Receitas = styled.div`
  display: grid;
  max-height: 200px;
  max-width: 400px;
  border-radius: 10px;
  text-align: center;
  justify-items: center;
  align-items: center;
  background-color: #FEE6D6;
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
        // console.log("Deu certo", response.data)
      })

      .catch((err) => {
        console.log("Lista não deu certo, motivo", err.message);
      });
  }, []);

  const navigate = useNavigate();

  const volta_Login = () => {
    navigate("/login");
  };

  const vai_Add_Receita = () => {
    navigate("/add_receita");
  };

  const receitasCard = receitas.map((receita) => {
    return (
      <Card_Receitas>
        <p> {receita.title} </p>
        <FotoStyles src={receita.image} />
      </Card_Receitas>
    );
  });

  return (
      
    <div>
      <h2> Lista de Receitas </h2>
      <button onClick={volta_Login}> login </button>
      
      <button onClick={vai_Add_Receita}> Adicionar Nova Receita </button>

      <Base>
      
      {receitasCard}
      
      </Base>

    </div>
  );
};

export default Lista_Receita;
