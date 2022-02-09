import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CardStilo = styled.div `
border: 1px solid black;
`
const PokeCard = (props) => {

    const [pokemon, setPokemon] = useState("");


    useEffect((props) => {
        pegaPokemon(props.pokemon);
      }, [props.pokemon]);

      pegaPokemon = pokeName => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(response => {
            // guarda as infos do pokemon no estado
            setPokemon(response.data);
            console.log(response.data)
          })
          .catch(err => {
            alert(err.data);
          });
      };

  return (
    <CardStilo>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name} />)}
    </CardStilo>
  )
};

export default PokeCard;




  
    // render() {
    //   const pokemon = this.state.pokemon;
