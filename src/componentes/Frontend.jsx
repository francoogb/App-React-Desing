import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout"; // Ya está importado aquí

const Frontend = () => {
  const { Header, Footer } = Layout; // No necesitamos destructurar Content aquí
  const items = [
    {
      key: 1,
      label: (
        <Link to="/" title="Home">
          Home
        </Link>
      ),
    },
    {key:2, label: <Link to="/iconos" title="Íconos">Íconos</Link>},
    {key:3, label: <Link to="/button" title="Button">Button</Link>},
    {key:4, label: <Link to="/typography" title="Typography">Typography</Link>},
    {key:5, label: <Link to="/message" title="Message">Message</Link>},
    {key:6, label: <Link to="/carousel" title="Carousel">Carousel</Link>},
    {key:7, label: <Link to="/modal" title="Modal">Modal</Link>},
    {key:8, label: <Link to="/grid" title="Grid">Grid</Link>},
    {key:9, label: <Link to="/input" title="Input">Input</Link>},
    {key:10, label: <Link to="/formulario" title="Form">Form</Link>},
    {key:11, label: <Link to="/table" title="Table">Table</Link>},
    {key:12, label: <Link to="/table-fetch" title="Table Fetch">Table Fetch</Link>},



  ];

  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]} // Cambiado a "1" para coincidir con el key del ítem
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content>
          <Outlet />
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <hr />
            ©Todos los derechos reservados {new Date().getFullYear()} | Desarrollado por{" "}
            <a href="mailto:fran.valdenegr@gmail.com" title="Franco Valdenegro">
              Franco Valdenegro
            </a>
          </Footer>
        </Content>
      </Layout>
    </div>
  );
};

export default Frontend;
