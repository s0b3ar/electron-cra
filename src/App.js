import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron'
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    ipcRenderer.send('say-hello')
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. kek
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
