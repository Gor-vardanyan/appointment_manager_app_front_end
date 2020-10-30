import React from 'react';
import './Register.scss'; 
import { Form, Input, Button } from "antd";

const Login = ()=>{
    return (
<div className="centered">
<Form.Item className="centered" label="Registration">
  <Form.Item label="DNI" required tooltip="This is a required field">
      <Input placeholder="input placeholder" />
  </Form.Item>
  <Form.Item label="Full Name" required tooltip="This is a required field">
      <Input placeholder="Alberto Caballero " />
  </Form.Item>
  <Form.Item label="Email" required tooltip="This is a required field">
      <Input placeholder="alberto@caballero.com" />
  </Form.Item>
  <Form.Item label="Password" required tooltip="This is a required field">
      <Input/>
  </Form.Item>
  <Form.Item label="Phone number" required tooltip="This is a required field">
      <Input placeholder="+34 XXX-XXX-XXX" />
  </Form.Item>
</Form.Item>
<Button>Submit</Button>

</div>
    )}
export default Login;