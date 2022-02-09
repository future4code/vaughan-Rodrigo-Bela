import React from "react";
import styled from "styled-components";
import axios from "axios";
import Apresentacao from "./components/Apresentacao";
import PokeCard from "./components/PokeCard/PokeCard";
import fundoP from "./components/img/fundoP.jpg"
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const Fundo = styled.div`
  background: url(${fundoP});
  height: 1000px;
`

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")

      .then((response) => {
        setPokeList(response.data.results);
        console.log(response.data.results);
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const changePokeName = (event) => {
    setPokemonName(event.target.value);
    console.log(event.target.value);
  };

  console.log("pokemonName", pokemonName);

  return (
    <div className="App">

      <Fundo>

      <Apresentacao />

        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>

        {/* {pokemon && <PokeCard pokemon={pokemon} />} */}
        {/* {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />} */}
        

       </Fundo>

      </div>
  );
};

export default App;
