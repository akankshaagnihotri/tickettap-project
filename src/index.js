import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { RouterProvider } from 'react-router-dom';
import Routes, { router } from './routes/Routes';
import Store from './store/Store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Store>
  <Routes/>
  </Store>
)
