import React from 'react';
import logo from './logo.svg';
import './App.css';
import marvelApi from './services/marvelApi/';

import config from './config/config';
import log from 'loglevel';

const doSomething = async () => {
  console.log('doSomething called!');

  try {
    const results = await marvelApi('/comics', {
      searchParams: { title: 'Captain America' }
    });
    console.log(results);
  } catch (ex) {
    console.error(ex);
  }
};

function App() {
  log.info(`rendering App with marvelApiUrl ${config.marvelApiUrl}`);
  // testLogger();
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
