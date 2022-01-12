import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

import styles from './styles';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02N1KP6G7M-50d6aa255eec-512" 
          nome="Rodrigo Brito" 
          descricao="Oi, me chamo Rodrigo, tenho 29 anos e no momento apenas estudo,
          tenho formação em ADS e amo tecnologia, nasci e vivo em São Paulo,
          adoro esta cidade e as pessoas que conheço por aqui.
          Trabalhei a um tempo considerável como Arte Finalista e Suporte de T.I,
          e hoje estou me preparando para migrar para a área de Desenvolvedor Web."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">

        <CardPequeno
          imagem="https://www.tijucas.sc.leg.br/imagens/email2icon.png/image"
          nome="E-mail: rodrigo.lab@yahoo.com"
        />
        
        <CardPequeno
          imagem="https://www.imagensempng.com.br/wp-content/uploads/2021/03/Mapa-de-icones-Png.png"
          nome="Endereço: Rua Rio Birigui - Itaquera - SP"
        />


        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://yata-apix-42b70165-50c9-44af-ab3e-10fbbcd62702.lss.locawebcorp.com.br/75c20809d7bb44479a8a732e3e7bfaa2.jpg" 
          nome="Prol Visual  |  Santec" 
          descricao="Trabalhei como Arte Finalista por 7 anos, criando todo tipo de arte final utilizando ferramentas
          como Photoshop, CorelDraw entre outros. " 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEUAQW3///8APWsAMmQoYIPi7PCsydUAOmkAP2wAJV7w9vlMb40AN2dFfZp+kKUie5fO1NsALWLH3+UAVHoAR3LQ3+UIW3/T6OxggZrd6/CPws6CoLOErr7E2OEAIVtgl6wAKmAATHUhW4AUUnldiKJOi6RVeJO40dt0mK22xM91o7bBzdZAYoORtsadyNOpxdEsaIljn7Kjt8WTqbo0V3x5tMSKtMMAAE4ADlQtcZEAG1massFKdJE1b45vjqVGgpxmfJYjfZhThJ8YvoN9AAAF6klEQVR4nO3aa1viOBgG4NIAifVlVqDAoDJyUtSRxcOOu46Ozvr/f9SWQmneJD0wi1zz4bk/YZo2edq0STvjeQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/P9+mPE+ZBTFnqeKlWnXP2pJuMrYqx2GcPStTK6I1E1ZtE0+1ecG6Y2NW6sWlKuSlkXGSfWIdeqS1zfYLXR2xjH37kE5pK3Jas9VDOg/0glMZd7g9YNUacam8MHcPZmJ1cLoMzG2z0eYqhjOtvHM4bjl6Yro6uC5RK5IOFPm1Ygtu6IYV9MNlv+RnXu2KlocQ8/iPVqr35zqhPOu1ejW+00IkTYcdvcnDqlHR6ejLaYlakTThpOPaPqXRgBXcLgcXzXmtTjx4m3HPWmFbk1ynZWH18K6v73VJe00oL5zbZ026ZwWnyzMvzD5cRMPUf4p/toZKk57B6PkhiU4Dba932mdCcu8QeDRlBbXoGvpds9oyNz3EP1tNL5uiS/1YXX+PCYd9d4XoPLO/g2iYigezVk0oL1wN59yE0VDWB3gnvqv3k9C+LGv31JyxggdSnn3L3vr+zWoAFiRUo56220LuLSGdZFQYhGxgRXemlIeBVe2BkmoFCY2Wlk+bPV3Dq6wa0XzBA42E42zMvOb6mVuUULXZ4Rq0n4RqknEbVipn5nzxdjCzawV/heuOZz5Lk19DNsZrY7mXhBlzxVJHCD5ffBWuauev6x+tUTe1mQ9H3bZc/xTf+PE9fx8JRXb1YEQNVtA/d1WbJach6Gm0NU2vu05Ld3zPZ/FrCR9L1KokCZU1hWteSfAb0X7OZJZ2munj5ZrcCaOnVG7Cvw9cmh5pf/2z0Pd4+q5tWj9nbt29jj2TcNx45bgSGqN02aPchN9lSn8X0om6vkdDWhWIT+F8uuuExrKmjKA1iwzmySidDgbJu8TQmk0D/fxaCS8+p14yIhYmVKxC5Zw/PKvkmADz813ftEPWgBd6yauil38wK2GQqgwypqKihGrCGq2Fz6yJaFbmkYssRsJXijeRjpez/J1znzSdX0wof/AOEv/7SBCPXOAx83ZZRg0LbuoPSSh4gOjhydqodel2i4CDULk6kVzCt4LdPyShYocMQmVMj69yuMWN+EY5Af1R5uLpAxP6P1j/Z01PvrDjzkmw+SafcPZhdSpl8R39EQmNuaIhpAxZR/o+vVbKag3TQMY7PtFt8SPrIxLyuSKYNhqNJ/446NJhmZXUKuGmExS2J/p3mu75VYnBbiXsp2r1jAGSn1CNCts9EfJo64Ryytc0hnpGq1bCL/qaJuMhlp9QPhX2+kjYHy4KEzZbuQkvM+ZFe9VGLnKLhCLz5XejVpVtZ28cXyDTa1jJTXgynNs7uxJ+cvopSydUYYlb7BORa1AdXdplSUI1OT4+/raeOeTbcaq1SshfmrITuh01SyeUFyVu/4UwPwLHzkK7bHMNlRBiMzVKsXGwGp4n5E9cUXafMPMbFGtWOOeLqv2eUPidJlmYnpAnG46Tu/OEikq9/HWlo92BJ67/T0JPOEb57hOqMgErD4Lsy/VMjg+L2yT0/HvroDtPKPlKOBgk+Pqx45N1voMXqUZW7q0SKrIWOTtPaMwVVypc4x/BazdybDZSi6ZfYV2ErRJ6ftVcie88oXERGpR86TzgTb+SZ/blXriWC9slNBf5H5DQmCvSdZ/xj1F1Ic3L9bI8kPVe1TpwfTlSaZlgCa2nzc4T8rlikSY058mhOV/042W19V7V+0O3jqi6/6Zljyyh5/P3750n5IP0c7rN/BemJ+L/4FBZxL2Xue9Veau2JKESrKEoYZnX7fIJF3XNfKyt3elS31RvSJqzgunqPy2MeSn3mKza3q1N75tu+FW9E4tqO++IiQf2JYHutE2zJ/adSOiIvZxIti3ai1iBTC5BDteqje8eR2QblCKrcs6R1xGNrgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/v4D0WWJFuZc8cgAAAAASUVORK5CYII=" 
          nome="Aw2net | Info Tecch" 
          descricao="Também trabalhei como Suporte Tecnico de T.I, fazendo diversos tipos de manutenção em maquinas cliente e servidores, 
          alternando entre Remoto e Fild Service." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
