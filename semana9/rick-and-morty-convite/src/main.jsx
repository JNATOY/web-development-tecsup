import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/personajes',
    element: <h1>Personajes</h1>
  },
  {
    path: '/ubicaciones',
    element: <h1>Ubicaciones</h1>
  },
  {
    path: '/episodios',
    element: <h1>Episodios</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);