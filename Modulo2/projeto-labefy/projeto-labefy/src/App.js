import React from 'react';
import styled from 'styled-components';
import PlayerOficial from './components/Player';
import CardCadastro from './components/CardCadastro';
import CardListaMusicas from './components/CardListaMusicas';
import logo from './components/img/logo.jpg';


const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  border: 1px white solid;
  height: 90vh;
  & img {
    width: 100%;
  }
`
// const logoEstilo = styled.img`
//   display: block;
//   grid-column: 1 / 4;
//   grid-row: 1 / 2;
//   width: 100%;
// `

const Frase = styled.h1`
  display: grid;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  justify-content: center;
  color: white;
  padding: 30px;
  text-align: center;
`
const CriarPlaylist = styled.div`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  color: white;
  justify-content: center;
  align-items: center;
  border: 0.5px white solid;
  text-align: center;
  opacity: 50%;
  &:hover {
    opacity: 100%;
    border: none;
    background-color: #513A9D;
  }
`
const ListaPlaylist = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: white;
  justify-content: center;
  align-items: center;
  border: 0.5px white solid;
  text-align: center;
  opacity: 50%;
  &:hover {
    opacity: 100%;
    border: none;
    background-color: #513A9D;
  }

`
const Player = styled.div`
  display: grid;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  color: white;
  justify-content: center;
  align-items: center;
  border: 0.5px white solid;
  text-align: center;
  opacity: 50%;
  &:hover {
    opacity: 100%;
    border: none;
    background-color: #513A9D;
  }
`


class App extends React.Component {

  render() {

  return (


    <div className="App">
      
      <Base>
          
          <Frase> Seja muito bem vindo(a) ao projeto LabeFy! <img src={logo} /> </Frase>
          <CriarPlaylist> <CardCadastro /> </CriarPlaylist>
          <ListaPlaylist> <CardListaMusicas /> </ListaPlaylist>
          <Player> <PlayerOficial /> </Player>

      </Base>
      
    </div>


    );
  }
}
export default App;
