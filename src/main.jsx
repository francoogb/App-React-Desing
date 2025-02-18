import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontend from "./componentes/Frontend";
import '/public/css/estilos.css';
import Home from "./paginas/Home";
import IconPagina from "./paginas/IconPagina";
import ButtonPagina from "./paginas/ButtonPagina";
import TypographyPagina from "./paginas/TypographyPagina";
import MessagePagina from "./paginas/MessagePagina";
import CarouselPagina from "./paginas/CarouselPagina";
import ModalPagina from "./paginas/ModalPagina";
import GridPagina from "./paginas/GridPagina";
import InputPagina from "./paginas/InputPagina";
import FormularioPagina from "./paginas/FormularioPagina";
import TablePagina from "./paginas/TablePagina";
import TablePaginaFetch from "./paginas/TablePaginaFetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
    children: [
      {
        index: true,
        element: <Home />, // Usar Home correctamente
      },
      {
        path: "/iconos",
        element: <IconPagina />, // Aquí va el componente como JSX
      },
      {
        path: "/button",
        element: <ButtonPagina />, // Aquí va el componente como JSX
      },
      {
        path: "/typography",
        element: <TypographyPagina />,
      },
      {
        path: "/message",
        element: <MessagePagina />,
      },
      {
        path: "/carousel",
        element: <CarouselPagina />,
      },
      ,{
        path:"/modal",
        element:<ModalPagina />
      },
      ,{
        path:"/grid",
        element:<GridPagina />
      },
      ,{
        path:"/input",
        element: <InputPagina />
      },
      ,{
        path:"/formulario",
        element: <FormularioPagina />
      },
      {
        path:'/table',
        element :<TablePagina/>
      }
      ,{
        path:"/table-fetch",
        element: <TablePaginaFetch />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
