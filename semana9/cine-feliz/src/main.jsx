import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Movies from './components/Movies';
import './index.css';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetail />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
/*
el router se instala en  main

todo el ruteo se gui de esta pagina https://reactrouter.com/en/main/start/tutorial
*/