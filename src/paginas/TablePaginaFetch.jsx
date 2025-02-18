import React, { useEffect, useState } from 'react'
import { Table, Button, Breadcrumb } from "antd";
import { Link } from 'react-router-dom';
import axios from 'axios'; 
const TablePaginaFetch = () => {
  const [data, setdata] = useState([]);
  let traeDatos=async()=>
    {
        await axios.get('https://jsonplaceholder.typicode.com/posts' )
        .then(response=>{
            setdata(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    useEffect(() => {
      traeDatos();
  }, [ ]) 
    {/* en el caso de quiera personalizar el contenido de una fila, usar render */}
    let columns=[
        
        {
            title:'id',
            dataIndex:"id",
            key:"id"
        },
        {
            title:'userId',
            dataIndex:"userId",
            key:"userId"
        },
        {
            title:'title',
            dataIndex:"title",
            key:"title"
        },{
          title:'body',
          dataIndex:'body',
          key:'body'
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
        title: 'Tabla Axios',
      },
    ]} />
    <h1>Table Axios</h1>
    <Table columns={columns} dataSource={data} rowKey="id" />
    </>
  )
}

export default TablePaginaFetch