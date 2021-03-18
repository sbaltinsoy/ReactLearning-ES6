import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Colors } from './components/Colors';
import { NotFound } from './components/NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  redirectToHell = () => {
    this.setState({ redirect: true });
    /*
    this.setState((previousState) => ({
      redirect: !previousState.redirect,
    }));*/
  };
  render() {
    const colorCodes = ['222', '676', '495', '838', '498'];
    return (
      // NAVLINK NAVLINK NAVLINK NAVLINK NAVLINK
      <Router>
        <div className='App'>
          {this.state.redirect && <Redirect to='/hell' />}
          <nav>
            <button onClick={this.redirectToHell}>Redirect To Hell</button>
            <ul className='nav-links'>
              <li>
                <NavLink
                  to={'/'}
                  exact
                  activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/about'}
                  activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
                >
                  About
                </NavLink>
              </li>
              {colorCodes.map((code, index) => (
                <NavLink
                  key={index}
                  to={`/colors/${code}`}
                  exact
                  activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
                >
                  Colors
                </NavLink>
              ))}
              <li>
                <NavLink
                  to={'/colors'}
                  activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
                >
                  Colors
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/colors/:colorCode' component={Colors} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
      // LINK LINK LINK LINK LINK
      /*
      <Router>
        <div className='App'>
          <nav>
            <ul className='nav-links'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/colors'}>Colors</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/colors' component={Colors} />
          </Switch>
        </div>
      </Router>
      */
    );
  }
}

export default App;
