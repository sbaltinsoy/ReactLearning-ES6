import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await response.json();
    this.setState({
      data: json,
      isLoading: false,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul>
          {data.map((el) => (
            <li>{el.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
