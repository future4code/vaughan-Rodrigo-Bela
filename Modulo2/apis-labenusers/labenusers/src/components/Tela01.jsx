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

const CaixaDeInput = styled.input`
  display: block;
  border: none;
  font-family: 'Karla', sans-serif;
  box-shadow: 3px 1px 3px black;
  width: 300px;
  height: 35px;
  border-radius: 15px;
  color: black;
  text-decoration: none;
  text-anchor:blue;
  font-size: 16px;
  text-align: center;
`
const BotaoCadastrar = styled.button`
  border-radius: 15px;
  background-color: #f86d36;
  color: white;
  border: none;
  width: 200px;
  height: 40px;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
`

class Tela1 extends React.Component {

    state = {
        nome: "",
        email: ""
    }
    manusearNome = (event) => {
        this.setState({nome: event.target.value})
    } 

    manusearEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazCadastro = () => {

        const createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
              name: this.state.nome,
              email: this.state.email 
            }
            axios.post(url, body, {headers:
                {Authorization:'rodrigo-brito-vaughan'}})
            
            .then((resp)=>{
              alert("Usuário cadastrado corretamente")
              this.setState({nome:"", email:""})
            })
            
            .catch((erro)=>{
              alert(`Não cadastrado: ${erro.response.data}`)
            })
          }
          
          createUser()
    }
    render() {
  
        return (

            <div>

                <BotaoTroca onClick={this.props.irParaLista}> Ir para lista de Usuários >></BotaoTroca>
                <h2> Tela de Cadastro </h2>

                <CaixaDeInput value={this.state.nome} onChange={this.manusearNome} placeholder={'Nome'}/>
                <br></br>
                <CaixaDeInput value={this.state.email} onChange={this.manusearEmail} placeholder={'E-mail'}/>
                <br></br>
                <BotaoCadastrar onClick={this.fazCadastro}> Cadastrar Usuário </BotaoCadastrar> 
        
            </div>
      );
    }
  }

export default Tela1