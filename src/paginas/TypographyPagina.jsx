import React, { useState } from 'react'
import { Breadcrumb, Space, Typography } from "antd"; 
const TypographyPagina = () => {
    const [editar, seteditar] = useState("Texto editable");
    const {Title, Text, Link, Paragraph}=Typography;
  return (
    <>
       <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Typography',
      },
    ]}
  />
    <h1>Typography</h1>
    <h2>Títulos H</h2>
    <Title>Título h1</Title>
    <Title level={2}>Título h2</Title>
    <Title level={3}>Título h3</Title>
    <Title level={4}>Título h4</Title>
    <Title level={5}>Título h5</Title>
    <hr />
    <h2>Text</h2>
    <Space direction='vertical'>
    <Text>Default</Text> 
    <Text type="success">Success</Text>
    <Text type="warning">Warning</Text>
    <Text type="danger">Danger</Text>
    <Text type="secondary">Secondary</Text>
    <Text disabled>disabled</Text>
    <Text mark>mark</Text>
    <Text code>code</Text>
    <Text keyboard>keyboard</Text>
    <Text underline>underline</Text>
    <Text strong>strong</Text>
    <Text delete>delete</Text>
    <Link href='https://ant.design/components/typography' target='_blank'>Vínculo a Ant Desing</Link>
    </Space>
    <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque doloremque accusantium, excepturi illum aspernatur voluptas quam aperiam, impedit tempora reiciendis ad mollitia adipisci modi eum velit similique itaque at eos!</Paragraph>
    <hr/>
    <Paragraph copyable>Texto para copiar en el portapapeles</Paragraph>
    <hr/>
    <Paragraph editable={{onChange:seteditar}}>{editar}</Paragraph>
    </>
  )
}

export default TypographyPagina