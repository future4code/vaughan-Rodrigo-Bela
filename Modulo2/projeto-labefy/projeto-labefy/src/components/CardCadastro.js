import React from 'react';
import styled from 'styled-components';
import axios from 'axios';






const EstiloCadastro = styled.div`
  border-radius: 10px;
  background-color: #513A9D;
  padding: 25px;
  height: 350px;
`
const InputEstilo = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 10px;
`
const BotaoEstilo = styled.button`
  width: 23vw;
  height: 3vh;
  border: none;
  border-radius: 7px;
  box-shadow: 2px 2px 2px;
  margin: 10px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #C6B5FF;
    box-shadow: 1px 2px 5px;
    }
`







class CardCadastro extends React.Component {

  render() {

  return (

      <EstiloCadastro> 
        <h3> Aqui você cadastra suas playlists,<br/> vamos lá? </h3>
        <InputEstilo placeholder='Nome da Playlist'></InputEstilo>
        <br/>
        <InputEstilo placeholder='Nome da Banda ou Cantor'></InputEstilo>
        <br/>
        <InputEstilo placeholder='Link da Música'></InputEstilo>
        <br/>
        <BotaoEstilo> Criar Playlist </BotaoEstilo>
      </EstiloCadastro>
    

    );
  }
}




export default CardCadastro;