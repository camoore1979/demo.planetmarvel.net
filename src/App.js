import React from 'react';
import logo from './logo.svg';
import './App.css';

const { REACT_APP_MY_VAR } = process.env;

function App() {
  console.log(`rendering App with REACT_APP_MY_VAR ${REACT_APP_MY_VAR}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>demo.planetmarvel.net</code> is coming soon!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
