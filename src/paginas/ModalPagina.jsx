import React, { useState } from "react";
import { Button, Modal, Form, Breadcrumb, Space } from "antd";
import { Link } from "react-router-dom";

const ModalPagina = () => {
  const [modal, setModal] = useState(false);
  const { Item } = Form;
  
  const abrirModal = (accion) => {
    setModal(accion);
  };
  
  const accionModal = () => {
    abrirModal(false);
    console.log("acá puedes hacer cualquier cosa");
  };

  // Funciones para mostrar diferentes tipos de modales
  const showInfoModal = () => {
    Modal.info({
      title: "Este es un mensaje informativo",
      content: (
        <div>
          <p>Algunos mensajes... algunos mensajes...</p>
          <p>Algunos mensajes... algunos mensajes...</p>
        </div>
      ),
      onOk() {},
    });
  };
  
  const showSuccessModal = () => {
    Modal.success({
      title: "Operación exitosa",
      content: "Algunos mensajes... algunos mensajes...",
    });
  };
  
  const showErrorModal = () => {
    Modal.error({
      title: "Este es un mensaje de error",
      content: "Algunos mensajes... algunos mensajes...",
    });
  };
  
  const showWarningModal = () => {
    Modal.warning({
      title: "Este es un mensaje de advertencia",
      content: "Algunos mensajes... algunos mensajes...",
    });
  };

  //alinear input
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Modal",
          },
        ]}
      />
      <h1>ModalPagina</h1>
      <div className="App">
        <Button
          type="primary"
          onClick={() => abrirModal(true)}
        >
          Abrir modal
        </Button>

        <Modal
          title="Título header"
          open={modal}
          onCancel={() => abrirModal(false)}
          centered
          footer={[
            <Button
              key="cancel"
              onClick={() => abrirModal(false)}
            >
              Cancelar
            </Button>,
            <Button 
              key="submit" 
              type="primary" 
              onClick={accionModal}
            >
              Enviar
            </Button>,
          ]}
        >
          <h2>Título</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam iste
            officiis ab fugit iure magni accusamus suscipit commodi perferendis,
            provident dolore sed natus, culpa distinctio itaque nisi sint
            sapiente incidunt.
          </p>
        </Modal>
        
        <Space wrap style={{ marginTop: '20px' }}>
          <Button onClick={showInfoModal}>Info</Button>
          <Button onClick={showSuccessModal}>Success</Button>
          <Button onClick={showErrorModal}>Error</Button>
          <Button onClick={showWarningModal}>Warning</Button>
        </Space>
      </div>
    </>
  );
};

export default ModalPagina;