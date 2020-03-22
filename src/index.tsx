import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './dataQuestion5.json';

const dataQ5 = data.map(item => { return { ...item, edit: false } })
ReactDOM.render(
  <React.StrictMode>
    <App question5={dataQ5} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
