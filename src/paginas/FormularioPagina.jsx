import React, { createRef } from 'react'
import { Form, Input, Button, Checkbox, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom';
import {LockOutlined, ClearOutlined} from '@ant-design/icons';
const FormularioPagina = () => {
    const {Item} = Form;
    const {Password}=Input;
    const formSuccess=(datos)=>
    {
        console.log(`E-Mail:${datos.correo}`);
        console.log(`Contraseña:${datos.password}`);
    };
    const formRef=createRef();//lo creamos para poder limpiar los campos
    const limpiar=()=>
    {
        formRef.current.resetFields();
    };
  return (
    <>
     <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Formulario',
      },
    ]} />
    <h1>Formulario</h1>
  
            <Form 
            name="formulario" 
            initialValues={{
                recordar:true
            }}
            onFinish={formSuccess}
            ref={formRef}>
                <Item 
                label="E-Mail" 
                name="correo" 
                rules={[
                    {
                        required: true,
                        message:"Por favor ingresa tu E-Mail"
                    },
                    {
                        type: 'email',
                        message: 'Debe ingresar un E-Mail válido',
                      }
                ]}>
                    <Input />
                </Item>
                <Item 
                label="Contraseña" 
                name="password" 
                rules={[
                    {
                        required: true,
                        message:"Por favor ingresa tu contraseña"
                    }
                ]}>
                    <Password />
                </Item>
                <Item name="recordar" valuePropName='checked'>
                    <Checkbox>Recordar usuario</Checkbox>
                </Item>
                <Item>
                <Button type="primary" htmlType='submit' title='Iniciar sesión' icon={<LockOutlined />}>Iniciar sesión</Button>
                &nbsp;&nbsp;&nbsp;
              <Button type="primary" danger onClick={limpiar} title="Limpiar" icon={<ClearOutlined />}>Limpiar</Button>
                </Item>
            </Form>
        
    </>
  )
}

export default FormularioPagina