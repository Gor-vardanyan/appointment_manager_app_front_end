import React from "react";
import './Admin.scss'; 
import "antd/dist/antd.css";
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const Login = ({setUser}) => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault(); // para evitar refrescar la página
    const admin = {
      email: event.target.email.value,
      password: event.target.password.value
    }; 
    axios.post('http://localhost:5000/admin/logInAdmin', admin)
    .then(res => {
        res.data.admin.admin = true;
        setUser(res.data.admin) //seteo el user como estado del App.js
        localStorage.setItem('authToken', res.data.admin.token);
        localStorage.setItem('user', JSON.stringify(res.data.admin))
        notification.success({ message: 'Bienvenide', description: 'Bienvenide ' + admin.email })
        setTimeout(() => {
            history.push('/administration')
       }, 1000);
    })
    .catch(error => { alert("Error"); console.log(error);})
  };
 
return (<form className="centered" onSubmit={handleSubmit} >
    <label>Email:<input name="email" type="email"/> </label>
    <label>Password:<input name="password" type="password"/></label>
  <input type="submit" value="Submit"/>
</form>);
};

export default Login;