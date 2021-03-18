import React, { Component } from 'react';
import Bir from './Ders5_1';
import { Iki, Uc } from './Ders5_2';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Bir />
        <Iki />
        <Uc />
      </div>
    );
  }
}

export default App;
