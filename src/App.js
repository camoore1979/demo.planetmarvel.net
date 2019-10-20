import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppReducer from './store/AppReducer';
import Main from './components/Main';
import Login from './components/Login/Login';

function App() {
  return (
    <AppReducer>
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              component={() => <Login otherMessage="yo adrian" />}
            />
            <Route path="/" component={Main} />
          </Switch>
        </Router>
      </div>
    </AppReducer>
  );
}

export default App;
