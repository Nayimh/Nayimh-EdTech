import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import axios from 'axios';
const user = JSON.parse(localStorage.getItem("user"));

axios.defaults.baseURL = "https://classroommern.herokuapp.com/";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${user?.token}`;

console.log(`Bearer ${user?.token}`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />

    </Provider>
  </React.StrictMode>
);


