import React from 'react';
import ReactDOM from 'react-dom';
import { initialize } from "react-ga";
import { App } from './App';
import './index.css';

initialize("UA-216154970-1");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
