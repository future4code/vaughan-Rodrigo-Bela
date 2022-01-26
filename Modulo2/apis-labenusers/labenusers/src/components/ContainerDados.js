import React from 'react';



state = {

    nome : {value},
    email : ""
  
}

let value = "";

// putOnSetSytate = () => {
//     this.setState({inputValue:event.target.value})
// }


class ContainerDados extends React.Component {

    render() {
        console.log(value)
        return(
            <div>
                <h3> Cadastro de Usuários Lab </h3>
                <input value={this.value} placeholder='Nome'/>
                <input placeholder='E-mail'/>
                <button> Criar usuário </button>
                            <br></br>
                <button> Trocar tela </button>

                
            </div>
        )
        
    }

}

export default ContainerDados;