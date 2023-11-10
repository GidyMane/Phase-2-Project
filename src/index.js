import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  BrowserRouter as Router} from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css'
import { CartProvider } from 'react-use-cart';
import { useState, createContext } from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <App />
        </CartProvider>
   
    </Router>
  </React.StrictMode>
);
