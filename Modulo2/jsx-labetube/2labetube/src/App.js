
import './App.css';
import logoL from "./img/LogoLabeTube.png";
import home from "./img/iconehome.png";
import alta from "./img/iconeEmAlta.png";
import inscrito from "./img/iconeInscricao.png";
import historico from "./img/iconeHistorico.png";
import config from "./img/iconeConfiguracao.png";

function App() {
  return (
    <div className="container">

      <div className='cabecalho'>
        <img className='logo' src={logoL} />
        <input className='busca' placeholder='Pesquise seus videos favoritos...' />
        <button className='botao'> Buscar </button>
      </div>

      <div className="main">
      

        <table>
          <div><tr><td><img className='home' src={home} /></td><td><p>Home</p></td></tr></div>
          <div><tr><td><img className='alta' src={alta} /></td><td><p>Em alta</p></td></tr></div>
          <div><tr><td><img className='inscrito' src={inscrito} /></td><td><p>Incrições</p></td></tr></div>
          <div><tr><td><img className='historico' src={historico} /></td><td><p>Histórico</p></td></tr></div>
          <div><tr><td><img className='config' src={config} /></td><td><p>Configurações</p></td></tr></div>
        </table>
        
       

      </div>

      <div className="rodape">
          
      </div>

    </div>
  );
}

export default App;


 