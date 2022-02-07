import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const EstiloCadastro = styled.div`
  border-radius: 10px;
  background-color: transparent;
  padding: 29px;
  height: 490px;
`
const InputEstilo = styled.input`
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin: 10px;
  text-align: center;
  /* font-size: 80%; */
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


  state = {

    nomeDaPlaylist : "",
    
  }


     manusearNomePlaylis = (e) => {
      this.setState({nomeDaPlaylist : e.target.value})
    }


     fazerCadastro = () => {

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
          name : this.state.nomeDaPlaylist,
      }

        axios.post(url, body, {
              headers: {
                  Authorization: "rodrigo-brito-vaughan" 
              } 
    })

    .then((res) => {
      alert("Playlist criada com Sucesso")
      this.setState({nomeDaPlaylist : ""})
      
    })

    .catch((err) => {
      alert(err.response.data.message)
    })

  }

  render() {

      return (

      <EstiloCadastro>

        <h3> Aqui você cadastra suas Playlists,<br/> vamos lá? </h3>

        <InputEstilo value={this.state.nomeDaPlaylist} onChange={this.manusearNomePlaylis} placeholder={"Nome da nova Playlist"} /> 
        <br/>
        <BotaoEstilo onClick={this.fazerCadastro}> Criar nova Playlist </BotaoEstilo>
        <br/>
      
        <h4> E também pode adicionar musicas a Playlist já existentes! </h4>
        <InputEstilo placeholder={"Nome da Playlist"} /> 
        <InputEstilo placeholder={"Nome da Banda ou Cantor"} /> 
        <br/>
        <InputEstilo placeholder={"Link da Música"} /> 
        <BotaoEstilo > Adicionar a Playlist </BotaoEstilo>
        
        

      </EstiloCadastro>
    

    );
  }
}




export default CardCadastro;