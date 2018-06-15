import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Div que não existe */}
        <Fragment>
          {/* Componente Cabecalho, em outro arquivo JS */}
          <Cabecalho usuario="Guilherme Delmiglio" />
        </Fragment>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React BR</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    )
  }
}

export default App;
