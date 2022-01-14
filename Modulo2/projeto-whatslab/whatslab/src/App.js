import React from 'react';
import './App.css';
import Whatslabe from "./img/logoWhats.png";
import InputUsuario from "./components/InputUsuario.jsx";

function App() {
  return (
    
    <div className="App">

        <img src={Whatslabe} alt="Logo WhastLabe" />;
        
        <InputUsuario />
        
    </div>   
  )
};

export default App;



