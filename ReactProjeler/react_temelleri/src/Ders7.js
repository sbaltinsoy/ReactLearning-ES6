import React from 'react';

// Fragmentler, Dom’a ekstra düğüm eklemeden bir alt elemanlar listesini gruplandırmanıza izin verir.
export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Merhaba</h1>
        <h1>Merhaba</h1>
      </React.Fragment>
    );
  }
}

export default App;
