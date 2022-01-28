import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardCadastro from './components/CardCadastro'
import CardListaMusicas from './components/CardListaMusicas'


const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  border: 1px white solid;
  height: 90vh;
`
// const ImagenFundo = styled.img`
//   display: grid;
//   grid-column: 1 / 4;
//   grid-row: 1 / 3;
//   width: 100px;
// `

const Frase = styled.h1`
  display: grid;
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  justify-content: center;
  color: white;
  padding: 30px;

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
          
          <Frase> Seja muito bem vindo(a) ao LabeFy. </Frase>
          <CriarPlaylist> <CardCadastro /> </CriarPlaylist>
          <ListaPlaylist> <CardListaMusicas /> </ListaPlaylist>
          <Player> <div> Aqui é o Player</div> </Player>

      </Base>
      
    </div>


    );
  }
}
export default App;
