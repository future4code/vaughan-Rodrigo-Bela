import React from 'react';
import './App.css';
import ContainerDados from './components/ContainerDados.js'
import axios from 'axios'





const createUser = () => {

  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

  const header = {headers:
    {Authorization:'rodrigo-brito-vaughan'}}

  const body = {
	name: "Rodrigo",
	email: "rodrigo.lab@yahoo.com"}

  axios.post(url, header, body)
  
  .then((r)=>{
    console.log("Dados cadastrados corretamente")
  })
  
  .catch((error)=>{
    console.log(`Dados não cadastrados, motivo: ${error.response.data}`)
  })
}

createUser()

class App extends React.Component {

  render() {

  return (
    <div className="App">
      
      <main> 

        <div className="AreaLogin"> <ContainerDados />  </div>
      
      </main>

    </div>
    );
  }
}

export default App;