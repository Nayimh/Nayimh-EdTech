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
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
// axios.defaults.headers.post["Content-Type"] = "application/json";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />

    </Provider>
  </React.StrictMode>
);


