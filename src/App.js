import React from 'react';
import logo from './logo.svg';
import './App.css';

import createMarvelApiFetch from './services/createMarvelApiFetch';

const fetchFromMarvelApi = createMarvelApiFetch();
const { REACT_APP_MY_VAR } = process.env;

const doSomething = async () => {
  console.log('doSomething called!');

  try {
    const results = await fetchFromMarvelApi();
    console.log(results);
  } catch (ex) {
    console.error(ex);
  }
};

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
      <p>
        <button onClick={doSomething}>DO SOMETHING</button>
      </p>
    </div>
  );
}

export default App;
