import React from "react";
import axios from 'axios'
import styled from "styled-components"

const BotaoTroca = styled.button`
  background-color: #f39727;
  color: white;
  width: 100%;
  height: 50px;
  padding: 10px;
  border: none;
  font-family: 'Karla', sans-serif;
  font-size: 25px; 
  cursor: pointer;
`

const CardUsuario = styled.div`
  display: flex;
  border: none;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  width: 250px;
  justify-content: space-between;
  background-color: #f88800;
  border: none;
  box-shadow: 3px 1px 3px black;
  font-family: 'Karla', sans-serif;
  font-size: 25px;
  color: white;
`

const voltar = "<< Voltar para tela de Cadastro"

class Tela2 extends React.Component {

    state = {
      usuarios: []
    }
    componentDidMount() {
      this.pegarUsuario()
    }

    pegarUsuario = () => {

      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

      axios.get(url, {headers:
        {Authorization:'rodrigo-brito-vaughan'}})

      .then((resp)=>{
          this.setState({usuarios: resp.data})
          
        })
        
      .catch((erro)=>{
          alert ("Houve algum problema, não consegui trazer as informações")
        })
    }
    
    apagaOuNao = (id) => {
      const r = confirm("Tem certeza de que deseja deletar?");
      if(r == true) {
      this.deletarUsuario(id)
      alert ("Ok, não tera mais volta!");
      
      }
      else {
      alert("Ok, Cancelado!");
      } 
    }
  
    deletarUsuario = (id) => {

      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

      axios.delete(url, {headers:
        {Authorization:'rodrigo-brito-vaughan'}})

        .then((resp)=>{                         
            alert("Usuário(a) deletado(a) com sucesso!!!")
            this.pegarUsuario()
        })

        .catch((err)=>{
            alert(`Ocorreu algum erro, motivo: ${err.response.data}`)
        })
    }
    render() {
      console.log(this.state.usuarios)

      const listaUsuarios = this.state.usuarios.map((user) => {
          return (<CardUsuario key={user.id}> {user.name} 
          <button onClick={()=> this.apagaOuNao(user.id)}> X </button>
          </CardUsuario>
          
            )
      })
        return (

            <div>
                <BotaoTroca onClick={this.props.irParaCadastro}> {voltar}  </BotaoTroca>
                <h2> Tela de lista de Usuários </h2>
                {listaUsuarios}
            </div>
      );
    }
  }



export default Tela2