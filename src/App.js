import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
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
          Edit <code>src/App.js</code> and save to reload. kek. lol
        </p>
        <Link to="/second-page">
          Second Page
        </Link>
      </header>
    </div>
  );
}

export default App;
