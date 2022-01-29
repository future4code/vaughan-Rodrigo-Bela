import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import lixo from './img/lixo.png'


const EstiloPlaylist = styled.div`
  border-radius: 10px;
  background-color: transparent;
  padding: 25px;
  height: 650px;
  width: 350px;
    &:hover {
      
    }
`

const CardPlaylist = styled.p`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 8px;
  padding: 5px;
  margin: 10px;
  width:280px;
  font-size: 20px;
  cursor: pointer;
  background-color: #563ea8;
    & img {
      width: 16px;
      height: 25px;
       &:hover {
          filter: invert(1);
      }
  }
`
const BotaoBaseLixo = styled.button`
  background:none;
  border:0px;
`

const ClickNaPlaylist = styled.button`
  background:none;
  border: none;
  color: white;
  &:hover {
    background-color: white;
  }
  `

class CardListaMusicas extends React.Component {

  state = { 
    playlists: []
  }

  componentDidMount() {
    this.pegarPlaylists()
  }

  componentDidUpdate() {
    this.pegarPlaylists()

  }

  pegarPlaylists = () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    
    axios.get(url, {
      headers: {
          Authorization: "rodrigo-brito-vaughan" 
     } 
})

.then((res) => {

  this.setState({playlists: res.data.result.list})

})

.catch((err) => {

  alert(`Não consegui trazer a lista ${err.response}`)

})

    }

  deletaPlaylist = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
      axios.delete(url, {
        headers: {
          Authorization: "rodrigo-brito-vaughan"
        }
    })

  .then((res) => {
      alert("Playlist deletada com sucesso!")
      this.pegarPlaylists()
    
    })
    
  .catch((err) => {
    aler(`Não foi possivel apagar a playlist, motivo :${err.response.data}`)
    
    })
  }

    render() {

        console.log(this.state.playlists)

        const playL = this.state.playlists.map((lista) => {
          return <ClickNaPlaylist onClick={""}> <CardPlaylist key={lista.id}> {lista.name} <BotaoBaseLixo onClick={() => this.deletaPlaylist(lista.id)}> <img src={lixo} alt='icone de uma lata de lixo' /> </BotaoBaseLixo>  </CardPlaylist> </ClickNaPlaylist>

        })

    return (
  
      
      <EstiloPlaylist>
            <h5> Suas Playlist favoritas </h5>
              {playL}
            
      </EstiloPlaylist>

  
      );
    }
  }
  export default CardListaMusicas;