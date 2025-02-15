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
