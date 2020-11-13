import React from 'react';
import "./Profile.scss";
import axios from 'axios';
import {  notification } from "antd"; //import { Form,Input,Button,} from "antd";


const Profile = (props) =>{

    const CancelDate = (item)=>{ // call axios a la ruta /dates/removeDateClient
        
        const token = localStorage.getItem('authToken')
        axios.post('https://heroku-apointment-manager-app.herokuapp.com/dates/removeDateClient',{
        }, {
            headers: { Authorization:'Basic '+ token }
        }).then(res => {
            if(res.data.user){
                localStorage.setItem('user', JSON.stringify(res.data.user))
                window.location.reload(true);
            }else
                notification.error({ message:'Error', description: res.data.message})
            
        })
        .catch(error => {console.log(error)});
    }

    const Active = (item)=>{
        return (<span>Pending <button type="submit" onClick={()=>{CancelDate(item)}} class="historic_cancel">Cancel</button></span>)
    }

    const  History = ({historic}) =>{
        let  historicArray =[];
        historicArray = historic?.map((Item) => {
            return(<div className={Item.status?'active':'done'}>
                        {Item.date} - {Item.status ?
                        <Active item={Item}></Active>
                        :'Finished'}
                    </div>
            )})
            return (<div>{historicArray.reverse()}</div>);
    }
    
    const ProfileInfo = (props)=>{
        return(
            <div className="profile_info">
            <div><b>Nombre:</b> {props.user.name}</div>
            <div><b>Email:</b> {props.user.email}</div>
            <div><b>Telefono:</b> {props.user.phone}</div>
            <div><b>Documento:</b> {props.user.dni}</div>
            </div>
        )
    }
    
    return(
        <div className="ProfileStructure">
            <div className="space" >Profile</div>
            <ProfileInfo user={props.user}></ProfileInfo>
            {props.user?.doctor
            ?<div>
                {props.children}
            </div>
            :<div>
                <div className="space">Create Appointment</div>
                {props.children}
                <div className="space">Appointments historic</div>
                <History historic={props.user?.historic}></History>
            </div>}
        </div>
    );
}

export default Profile;