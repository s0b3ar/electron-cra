import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import SecondPage from './components/SecondPage'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={App} />
    <Route exact path="/second-page" component={SecondPage} />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
