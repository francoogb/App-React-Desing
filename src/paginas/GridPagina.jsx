import React from 'react'
import { Row, Col, Divider, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';
const GridPagina = () => {
  return (
    <>
     <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Grid',
      },
    ]} />
    <h1>GridPagina</h1>
    <hr/>
    <Divider>1 Columna (24)</Divider>
    <Row>
        <Col span={24} style={{backgroundColor:'green', color:"white"}}>
        <div>Columna</div>
        </Col>
    </Row> 
    <Divider>2 Columnas (12 c/u)</Divider>
    <Row gutter={[8,8]}>{/* [horizontal, vertical] */}
        <Col span={12}>
        <div style={{backgroundColor:'green', color:"white"}}>Columna 1</div>
        </Col>
        <Col span={12} >
        <div style={{backgroundColor:'red', color:"white"}}>Columna 2</div>
        </Col>
    </Row>
    <Divider>3 Columnas (8 c/u)</Divider>
    <Row gutter={[16,16]}>
        <Col span={8}>
        <div style={{backgroundColor:'green', color:"white"}}>Columna 1</div>
        </Col>
        <Col span={8}>
        <div style={{backgroundColor:'red', color:"white"}}>Columna 2</div>
        </Col>
        <Col span={8}>
        <div style={{backgroundColor:'blue', color:"white"}}>Columna 3</div>
        </Col>
    </Row>
    <Divider>4 Columnas (6 c/u)</Divider>
    <Row gutter={[6,6]}>
        <Col span={6}>
        <div style={{backgroundColor:'green', color:"white"}}>Columna 1</div>
        </Col>
        <Col span={6}>
        <div style={{backgroundColor:'red', color:"white"}}>Columna 2</div>
        </Col>
        <Col span={6}>
        <div style={{backgroundColor:'blue', color:"white"}}>Columna 3</div>
        </Col>
        <Col span={6}>
        <div style={{backgroundColor:'blue', color:"white"}}>Columna 4</div>
        </Col>
    </Row>
    <Divider>3 Columnas (total 6/6)</Divider>
    <Row gutter={[16,16]}>
        <Col flex={2}>
        <div style={{backgroundColor:'green', color:"white"}}>Columna 2/6</div>
        </Col>
        <Col flex={1}>
        <div style={{backgroundColor:'red', color:"white"}}>Columna 1/6</div>
        </Col>
        <Col flex={3}>
        <div style={{backgroundColor:'blue', color:"white"}}>Columna 3/6</div>
        </Col> 
    </Row> 
    <Divider>2 Columnas (1 de 200px y otra del resto de la fila)</Divider>
    <Row gutter={[8,8]}>
        <Col flex="200px">
        <div style={{backgroundColor:'green', color:"white"}}>Columna 200px</div>
        </Col>
        <Col flex="auto">
        <div style={{backgroundColor:'red', color:"white"}}>Columna resto</div>
        </Col>
    </Row> 
    </>
  )
}

export default GridPagina