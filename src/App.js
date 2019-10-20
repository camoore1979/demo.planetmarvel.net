import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
