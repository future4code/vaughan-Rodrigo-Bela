import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const EstiloPlayer = styled.div`
  background-color: transparent;
  padding: 25px;
  
`


class PlayerOficial extends React.Component {


    state = {

        quantity : "",
        tracks : "",
        id : "",
        name : "",
        artist : "",
        url : "",
        
      }
    
    
         manusearNomePlaylis = (e) => {
          this.setState({nomeDaPlaylist : e.target.value})
        }
    
    
         fazerCadastro = () => {
    
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'
            
    
            axios.post(url, {
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
  
  
      <div>
            <EstiloPlayer>
                <p> {""} </p>
                <br />
                <iframe src="https://open.spotify.com/embed/track/160dVYhILGklcyZKCpk6N2?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <iframe src="https://open.spotify.com/embed/track/2JEMPv2cx8aaijwDzM4Exr?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </EstiloPlayer>
      </div>
  
      );
    }
  }




  export default PlayerOficial;

  