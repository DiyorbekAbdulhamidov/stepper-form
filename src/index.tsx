import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);