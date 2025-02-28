import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GobalStyle'; // Importando o GlobalStyle
import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import temaRose from './themes/rose';

function App() {
  return (
    <ThemeProvider theme={temaRose}>
      <GlobalStyle /> {/* Aplicando os estilos globais */}
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  );
}

export default App;
