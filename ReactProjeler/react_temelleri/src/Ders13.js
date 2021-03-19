import React from 'react';
import './App.css';

/* Context */

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// 1. adim context i olusturalim
const ThemeContext = React.createContext(themes.dark);

// 2. adim Provider olusturalim
// 3. adim consumer olusturalim
const ThemedButton = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => console.log(value)}
    </ThemeContext.Consumer>
  );
};
const Toolbar = () => <ThemedButton />;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ThemeContext.Provider values={themes.dark}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
