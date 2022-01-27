import React from 'react';
import styled from "styled-components"
import Tela01 from './components/Tela01';
import Tela02 from './components/Tela02';




const CardLogin = styled.div`

  display: grid;
  border: 1px solid;
  width: 400px;
  height: 400px;
  text-align: center;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  margin-top: 30%;
  background-image: linear-gradient(1deg, #faae90, #faae52);
  border: none;
  border-radius: 10px;
  box-shadow: 2px 1px 6px black;
`

class App extends React.Component {

  state = {
    telaAtual : "cadastro"
  }

  mudaTela = () => {
    switch (this.state.telaAtual){
            case "cadastro":
                  return <Tela01 irParaLista={this.irParaLista}/>
            case "lista":
                  return <Tela02 irParaCadastro={this.irParaCadastro}/>
            default:
                  return <div> Erro! não encontrei a pagina </div>
    }
  }

  irParaCadastro = () => {
      this.setState ({telaAtual : "cadastro"})
  }
  
  irParaLista = () => {
    this.setState ({telaAtual : "lista"})
  }
  render() {

  return (
    
    <div className="App">
      {/* <Base> */}
      <CardLogin >
      <main> 

        {this.mudaTela()}

      </main>
      </CardLogin>
      {/* </Base> */}
    </div>
    
    );
  }
}

export default App;