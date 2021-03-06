import React, { useState } from 'react';
import "antd/dist/antd.css";
import {  DatePicker, Space } from "antd"; //import { Form,Input,Button,} from "antd";
import axios from 'axios';
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";


const Appointment =({user,setUser})=>{
    let date = null;

    function onChange(value) {
        date = value;
        
      }
    function onOk(value) {
        date = value;
    }
    user = useState(JSON.stringify(user));
    const handleSubmit = event => {
        event.preventDefault(); // para evitar refrescar la página
        if(date === null || event.target.doctor.value === ''){
            return alert('Rellene los campos');
        }
        const token = localStorage.getItem('authToken')
        axios.post('https://heroku-apointment-manager-app.herokuapp.com/dates/createDate',{
            name: event.target.doctor.value,   
            date
        }, {
            headers: { Authorization:'Basic '+ token }
        }).then(res => {
            // console log temporal
            if(res.data.user){
                localStorage.setItem('user', JSON.stringify(res.data.user))
                window.location.reload(true);
            }else
                notification.error({ message:'Error', description: res.data.message})
            
        })
        .catch(error => {console.log(error)});
    }
    return(
        <div>
        <form onSubmit={handleSubmit} >
            <label>Doctor:<input name="doctor" type="text"/> </label>
            <Space direction="vertical" size={12}>
        <DatePicker name="date" showTime onChange={onChange} onOk={onOk}/>    
      </Space>
          <input type="submit" value="Submit"/>
        </form>
    <div>{user.history}</div>
        </div>
    );
}


export default Appointment;