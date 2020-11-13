import React from "react";
import './Doctor.scss'; 
import "antd/dist/antd.css";
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const Login = ({setUser}) => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault(); // para evitar refrescar la página
    const doctor = {
      email: event.target.email.value,
      password: event.target.password.value
    }; 
    axios.post('https://heroku-apointment-manager-app.herokuapp.com/doctor/logInDoctor', doctor)
    .then(res => {
        res.data.doctor.doctor = true;
        setUser(res.data.doctor) //seteo el user como estado del App.js
        localStorage.setItem('authToken', res.data.doctor.token);
        localStorage.setItem('user', JSON.stringify(res.data.doctor))
        notification.success({ message: 'Bienvenide', description: 'Bienvenide ' + doctor.email })
        setTimeout(() => {
        history.push('/profile')
       }, 1000);
    })
    .catch(error => { alert("Bienvenide"); console.log(error);})
  };
 
return (<form className="centered" onSubmit={handleSubmit} >
    <label>Email:<input name="email" type="email"/> </label>
    <label>Password:<input name="password" type="password"/></label>
  <input type="submit" value="Submit"/>
</form>);
};

export default Login;