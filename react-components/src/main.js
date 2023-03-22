import Layout from './components/layout/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/main.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(Layout, null, React.createElement(App, null))
    )
  )
);
