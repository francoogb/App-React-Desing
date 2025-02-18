import React from 'react'
import { Table, Button, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';

const TablePagina = () => {
    {/* en el caso de quiera personalizar el contenido de una fila, usar render */}
    let columns=[
        {
        title:'Nombre',
        dataIndex:"nombre",
        key:"nombre",
        render:((fila)=>
        <>
        <u>{fila}</u>
        </>)
        },
        {
            title:'Edad',
            dataIndex:"edad",
            key:"edad",
            render:((fila)=>(fila>18) ? <s>{fila}</s>:<i>{fila}</i>)
        },
        {
            title:'Género',
            dataIndex:"genero",
            key:"genero"
        },
        {
            title:'E-Mail',
            dataIndex:"correo",
            key:"correo"
        },
        {
            title:'Acciones',
            dataIndex:'acciones',
            key:'acciones',
            render:((fila)=>
            <>
            <Button>Editar</Button> {"  "} <Button type="primary" danger>Eliminar</Button>
            </>
            )
        }
    ];
    let data=[
        {
            key:'1',
            nombre:"Raúl Martínez",
            edad:35,
            genero:"Masculino",
            correo:"raul.martinez@tamila.cl"
        },
        {
            key:'2',
            nombre:"Juan Pérez",
            edad:33,
            genero:"Masculino",
            correo:"juan.perez@tamila.cl"
        },{
            key:'3',
            nombre:"María Yáñez",
            edad:12,
            genero:"Femenino",
            correo:"maria.yanez@tamila.cl"
        }

    ];
  return (
    <>
    <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Tabla',
      },
    ]} />
    <h1>Table</h1>
    <Table columns={columns} dataSource={data} />
    </>
  )
}

export default TablePagina