import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { AlipayCircleOutlined, DeleteFilled, Html5TwoTone, PieChartOutlined, SkypeOutlined } from '@ant-design/icons';

const IconPagina = () => {
  return (
    <>
      {/* Breadcrumb de navegación */}
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>, // Enlace a la página principal
          },
          {
            title: 'Íconos', // Título actual de la página
          },
        ]}
        style={{ marginBottom: "20px" }}
      />

      {/* Título de la página */}
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem", color: "#333" }}>Íconos</h1>

      {/* Contenedor de iconos con flexbox para alineación y espaciado */}
      <div style={{
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "30px",
        padding: "20px",
      }}>
        {/* Iconos con colores mejorados y sombra */}
        <PieChartOutlined 
          style={{
            fontSize: "90px", 
            color: "#FF6347", 
            transform: "scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
          spin={true} 
        /> {/* Tomate */}

        <SkypeOutlined 
          style={{
            fontSize: "90px", 
            color: "#32CD32", 
            transform: "scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
        /> {/* Verde pasto */}

        <AlipayCircleOutlined 
          style={{
            fontSize: "90px", 
            color: "#FFD700", 
            transform: "rotate(180deg) scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
        /> {/* Amarillo dorado */}

        <AlipayCircleOutlined 
          style={{
            fontSize: "90px", 
            color: "#4682B4", 
            transform: "scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
        /> {/* Azul acero */}

        <DeleteFilled 
          style={{
            fontSize: "90px", 
            color: "#FF4500", 
            transform: "rotate(90deg) scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
        /> {/* Rojo anaranjado */}

        <Html5TwoTone 
          style={{
            fontSize: "90px", 
            transform: "scale(1.1)", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
          }} 
          twoToneColor="#8A2BE2" 
        /> {/* Púrpura */}
      </div>

      {/* Separador */}
      <hr style={{ margin: "40px 0", borderTop: "2px solid #ddd" }} />
    </>
  );
};

export default IconPagina;
