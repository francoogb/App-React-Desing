import React from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontend from './componentes/Frontend';
import Home from "./paginas/Home";
import IconPagina from "./paginas/IconPagina";

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Frontend />,
      children: [
        {
          index: true,
          element: <Home /> // Usar Home correctamente
        },
        {
          path: '/iconos',
          element: <IconPagina /> // Aquí va el componente como JSX
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
