import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Colors } from './components/Colors';
import { NotFound } from './components/NotFound';

function App() {
  const colorCodes = ['#222', '#676', '495', '#838', '#498'];
  return (
    <Router>
      <div className='App'>
        <nav>
          <NavLink
            to={'/'}
            exact
            activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
          >
            Home
          </NavLink>

          <NavLink
            to={'/about'}
            activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
          >
            About
          </NavLink>
          {colorCodes.map((code) => (
            <NavLink
              to={`/colors/${code}`}
              activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
            >
              Colors
            </NavLink>
          ))}
          <NavLink
            to={'/colors'}
            activeStyle={{ fontWeight: 'bold', color: 'yellow' }}
          >
            Colors
          </NavLink>
        </nav>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/colors/:colorCode' component={Colors} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
