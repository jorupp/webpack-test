import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getConfig() {
  return {
    method: 'GET',
    headers: {
      'Allow': 'Everything',
    }
  };
}

class App extends Component {
  getConfigOne() {
    var config = getConfig();
    return config;
  }
  getConfigTwo() {
    var config = getConfig();
    config.otherMethod = 'POST2';
    config.method = 'POST';
    config.headers.Allow = 'This';
    return config;
  }
  render() {
    var config1 = this.getConfigOne();
    var config2 = this.getConfigTwo();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <pre>{JSON.stringify(config1)}</pre>
          <pre>{JSON.stringify(config2)}</pre>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
