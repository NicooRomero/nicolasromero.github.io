import React from 'react';
import Barra from './Layout/barra'
import Main from './Layout/main'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Waap from '../src/components/whatsapp';
import Footer from '../src/components/footer';
import ButtonUp from '../src/components/buttonup';

function App() {

  return (
    <>
     <Barra/>     
     <CssBaseline />
      <Container maxWidth="xl">
        <Main />
      </Container>
      <ButtonUp />
      <Waap position="fixed" />
      <Footer />
      
    </>
  );
}

export default App;
