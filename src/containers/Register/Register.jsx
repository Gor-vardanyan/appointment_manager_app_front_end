import React from 'react';
import './Register.scss'; 
import "antd/dist/antd.css";
import { notification } from "antd";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Register = ({setNewUser}) => {
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault(); // para evitar refrescar la página
        const newUser={
            dni: event.target.dni.value,
            name:event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone:event.target.phone.value
        };
        axios.post('http://localhost:5000/client/registerClients', newUser)
        .then(res => {setNewUser(res.data)
            notification.success({ message: 'Account created succesfully, please use your email and password to login', description: 'Bienvenide ' + newUser.name })
            setTimeout(() => {
                history.push('/client/logInClient')
            }, 1000);
        })
        .catch(error => { alert("user already exists"); console.log(error);})
    };

    return (
        <div className="centered">
            <form className="centered" onSubmit={handleSubmit} >
                <label>DNI: <input name="dni" required/></label>
                <label>Full Name: <input name="name" required/></label>
                <label>Email: <input name="email" required/></label>
                <label>Password: <input name="password" type="password" required/></label>
                <label>Phone number: <input name="phone" required/></label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};
export default Register;