import React,{ useState , useEffect} from 'react'
import axios from 'axios';
import './Administration.scss'
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";


const Administration = ()=>{
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        let newDoctor = {
            dni: event.target.dni.value,
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.password.value,
            phone: event.target.phone.value
        };
        const token = localStorage.getItem('authToken')
        axios.post(process.env.APP_URL+'/doctor/registerDoctor',newDoctor, {
            headers: { Authorization:'Basic '+ token }
        })
        .then(res => {
            window.location.reload(true);
            //notification.success({ message: 'Account created succesfully ', description: 'Doctor ' + newDoctor.name })
        })
        .catch(error => { alert("user already exists"); console.log(error);})
    };


    useEffect(() => {
        const token = localStorage.getItem('authToken')
        axios.post('http://localhost:5000/doctor/showAll',{}, {
            headers: { Authorization:'Basic '+ token }
        }).then(res => {
            setIsLoaded(true);
            setItems(res.data);
        })
        .catch(error => {console.log(error)});
  
    }, [])
    
    if(!isLoaded){
        return (<div>Loading</div>)
    }else{
    return (<div className="ProfileStructure">
        <div>Doctors List</div>
        <div>{
            items.map(item=>{ 
                return (<div>{item.name} - {item.dni} - {item.email} - {item.phone}</div>)
            })
        }</div>
             <div>Register new Doctor</div>
        <div>
            <form className="centered" onSubmit={handleSubmit} >
                <label>DNI: <input name="dni" required/></label>
                <label>Full Name: <input name="name" required/></label>
                <label>Email: <input name="email" required/></label>
                <label>Password: <input name="password" type="password" required/></label>
                <label>Phone number: <input name="phone" required/></label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>)
    }
}

export default Administration;