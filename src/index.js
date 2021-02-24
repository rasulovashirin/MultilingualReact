import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './Generals.css'

import { LangProvider } from "./LangContext"

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
    <App />
    </ LangProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
