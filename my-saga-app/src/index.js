import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Store';
import axios from 'axios';
import {Provider } from 'react-redux';
const jwtToken = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = jwtToken;
ReactDOM.render(
      <Provider store ={store}>  
      <App />
      </Provider>,  
      document.getElementById('root')
);