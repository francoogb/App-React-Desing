import React from 'react';
import { AntDesignOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, ConfigProvider, Space } from 'antd';
import { Link } from 'react-router-dom';
import { createStyles } from 'antd-style';

// Definir el estilo personalizado del botón con degradado
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const ButtonPagina = () => {
  const { styles } = useStyle(); // Usar el estilo del botón con degradado

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: 'Button',
          },
        ]}
      />
      <h1>Button</h1>
      <h2>Tipos de botones</h2>
      <hr />
      <Button type='primary' size='small'>Botón Primary</Button>
      <hr />
      <Button type='default' size='large'>Botón Default</Button>
      <hr />
      <Button type='dashed'>Botón Dashed</Button>
      <hr />
      <Button type='link' href='https://www.cesarcancino.com' target='blank'>Botón Link</Button>
      <hr />
      <Button type='ghost'>Botón Ghost</Button>
      <hr />
      <Button type='text'>Botón Text</Button>
      <hr />
      <h2>Propiedades adicionales</h2>
      <hr />
      <Button danger >Botón Danger</Button>
      <hr />
      <Button ghost >Botón Ghost</Button>
      <hr />
      <Button disabled type='primary'>Botón Disabled</Button>
      <hr />
      <Button loading type='primary'>Botón loading</Button>
      <hr />
      <h2>Agregando íconos</h2>
      <hr />
      <Button type='primary' icon={<SearchOutlined />}>Botón con ícono</Button>
      <hr />
      <h2>Diseño botón</h2>
      <hr />
      <Button type="primary" shape='circle'>Diseño circular</Button>
      <hr />
      <Button className='boton_custom'>Diseño clase css</Button>
      <hr />
      <h2>Botón con degradado</h2>
      <hr />
      <ConfigProvider
        button={{
          className: styles.linearGradientButton, // Aplicar el estilo del botón con degradado
        }}
      >
        <Button type="primary" size="large" icon={<AntDesignOutlined />}>
          Gradient Button
        </Button>
      </ConfigProvider>
      <hr />
      <h2>Evento onclick</h2>
      <Button onClick={() => alert("Hola")}>Evento onclick</Button>
    </>
  );
}

export default ButtonPagina;
