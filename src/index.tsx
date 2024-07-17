import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!); // ! DIZ QUE EU ESTOU GARANTINDO QUE GETELEMENT NÃO RETORNARÁ NULO
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);