import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Gabriella'}
          fotoUsuario={'https://picsum.photos/6/0'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://picsum.photos/5/1'}
          fotoPost={'https://picsum.photos/200/150'}
        />

<Post
          nomeUsuario={'Labenu'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
