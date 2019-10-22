import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import connect from '../store/connect';
import Main from './Main/Main';
import Login from './Login/Login';
import PrivateRoute from './PrivateRoute';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={() => <Login />} />
          <PrivateRoute isAuthenticated={props.isLoggedIn} path="/">
            <Main />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(App);
