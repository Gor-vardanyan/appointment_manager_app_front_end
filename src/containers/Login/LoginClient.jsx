import React from "react";
import './LoginClient.scss'; 
import "antd/dist/antd.css";
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const Login = ({setUser}) => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault(); // para evitar refrescar la página
    const user = {
      email: event.target.email.value,
      password: event.target.password.value
    }; 
    axios.post('http://localhost:5000/client/logInClient', user)
    .then(res => {
       setUser(res.data.user) //seteo el user como estado del App.js
       localStorage.setItem('authToken', res.data.user.token);
       localStorage.setItem('user', JSON.stringify(res.data.user))
       notification.success({ message: 'Bienvenide', description: 'Bienvenide ' + user.email })
       setTimeout(() => {
         history.push('/profile')
       }, 1000);
    })
    .catch(error => { alert("usuario no existe"); console.log(error);})
  };
 
return (<form className="centered" onSubmit={handleSubmit} >
    <label>Email:<input name="email" type="email"/> </label>
    <label>Password:<input name="password" type="password"/></label>
  <input type="submit" value="Submit"/>
</form>);
/*
  return (
<div className="centered" >
<Form onSubmit={testSubmit}>
<Form.Item  className="centered" label="Log in">
  <Form.Item label="Email" >
      <Input placeholder="alberto@caballero.com" />
  </Form.Item>
  <Form.Item label="Password">
      <Input/>
  </Form.Item>
</Form.Item>
<input type="submit" value="Submit" />
</Form>
</div>
  );*/
};

export default Login;