import React from 'react';

const Data = (props) => (
  <div>
    {props.todo.title} - {props.todo.userId} - {props.todo.id} -
    {props.todo.completed.toString()}
  </div>
);

class App extends React.Component {
  state = {
    todos: [],
    isLoading: true,
  };

  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const json = await response.json();
    this.setState({
      todos: json,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, todos } = this.state;
    return (
      <div className='App'>
        {!isLoading ? (
          todos.map((item, key) => {
            return <Data key={key} todo={item} />;
          })
        ) : (
          <h1>Hala Yukleniyor ... </h1>
        )}
      </div>
    );
  }
}

export default App;
