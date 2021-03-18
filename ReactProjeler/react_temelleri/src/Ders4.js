import React, { Component } from 'react';

// Kosullu Render - Conditional Rendering
// 1 - If / else
// 2 - return null
// 3 - ternary operator
// 4 - &&

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butonuGoster: false,
    };
  }

  guncelle = () => {
    this.setState((previousState) => ({
      butonuGoster: !previousState.butonuGoster,
    }));
  };
  render() {
    const { butonuGoster } = this.state;
    return (
      <div className='App'>
        {butonuGoster ? <button>Benim Butonum</button> : null}
        <button onClick={this.guncelle}>Guncelle</button>
      </div>
    );
    /*
    return (
      <div className='App'>
        {butonuGoster ? (
          <div>
            <button>Benim Butonum</button>
            <button onClick={this.guncelle}>Guncelle</button>
          </div>
        ) : (
          <button onClick={this.guncelle}>Guncelle</button>
        )}
      </div>
    );*/
    /*
    return (
      <div className='App'>
        {butonuGoster && (
          <>
            <button>Benim Butonum</button>
            <button>Senin Butonun</button>
          </>
        )}
        <button onClick={this.guncelle}>Guncelle</button>
      </div>
    );*/
    /*
    if (butonuGoster) {
      return (
        <div className='App'>
          <button>Benim Butonum</button>
          <button onClick={this.guncelle}>Guncelle</button>
        </div>
      );
    } else {
      //return null;

      return (
        <div className='App'>
          <button onClick={this.guncelle}>Guncelle</button>
        </div>
      );
    }*/
  }
}

export default App;
