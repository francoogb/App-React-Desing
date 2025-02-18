import { Breadcrumb, Input, Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
const InputPagina = () => {
    const {Password} = Input;
    const {Option}=Select;
    const selectInicio=(
        <Select defaultValue="1">
            <Option value="1">http://</Option>
            <Option value="2">https://</Option>
        </Select>
    );
    const eventoChange=(valores)=>
        {
            console.log("on eventoChange=" + valores);
        }
  return (
    <>
      <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Input',
      },
    ]} />
    <h1>Input</h1>
    <Input placeholder='dafault 32px'/>
   <hr/>
   <Input placeholder='large 40px' size='large' />
   <hr/>
   <Input placeholder='small 24px' size='small' /> 
   <hr/>
   <Input placeholder='con ícono' prefix={<UserOutlined />}/>
   <hr/>
   <Password  placeholder='Contraseña'/> 
   <hr />
   <Input placeholder='Máximo 10 caracteres' maxLength={10} /> 
   
   <hr/>
   <Select placeholder="Seleccione un país"  defaultValue="4" className='selectAnt'>
   <Option value="0">Seleccione.....</Option>
            <Option value="1">Chile</Option>
            <Option value="2">México</Option>
            <Option value="3">Perú</Option>
            <Option value="4">Colombia</Option>
            <Option value="5">España</Option>
            <Option value="6">Noruega</Option>
   </Select>
   <hr/>
   <Select placeholder="Seleccione varios países"  mode='multiple'  className='selectAnt'>
        <Option value="1">México</Option>
        <Option value="2">Chile</Option>
        <Option value="3">España</Option>
        <Option value="4">Perú</Option>
        <Option value="5">Venezuela</Option>
        <Option value="6">Ecuador</Option>
        <Option value="7">Paraguay</Option>
        <Option value="8">Brasil</Option>
        <Option value="9">Honduras</Option>
   </Select>
   <hr/>
   <Select placeholder="Con buscador"  showSearch optionFilterProp='children'  className='selectAnt' prefix={<SearchOutlined />}>
        <Option value="1">México</Option>
        <Option value="2">Chile</Option>
        <Option value="3">España</Option>
        <Option value="4">Perú</Option>
        <Option value="5">Venezuela</Option>
   </Select>
   <hr/> 
   <Input placeholder='Mi sitio web' addonBefore={selectInicio}  />
   <hr/>
   <Select placeholder="Con eventos"   className='selectAnt' onChange={eventoChange}>
   <Option value="1">México</Option>
        <Option value="2">Chile</Option>
        <Option value="3">España</Option>
        <Option value="4">Perú</Option>
        <Option value="5">Venezuela</Option>
        <Option value="6">Ecuador</Option>
        <Option value="7">Paraguay</Option>
        <Option value="8">Brasil</Option>
        <Option value="9">Honduras</Option>
   </Select>
    </>
  )
}

export default InputPagina