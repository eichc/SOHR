import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import App from './components/TestApp.tsx';
import Message from "./components/Newthing.tsx";
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let cities = ["Boston", "New York", "Chicago", "Los Angeles", "London"];
root.render(
  <React.StrictMode>
    <ListGroup />
    <Message />
    <Footer />
    <App />
    <Message />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
