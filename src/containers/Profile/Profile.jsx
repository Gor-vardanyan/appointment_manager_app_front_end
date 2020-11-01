import React from 'react';
import "./Profile.scss";
import Appointment from '../Appointment/Appointment'

const ProfileInfo = ({user})=>{
    return(
        <div className="profile_info">
        <div><b>Nombre:</b> {user.name}</div>
        <div><b>Email:</b> {user.email}</div>
        <div><b>Telefono:</b> {user.phone}</div>
        <div><b>Documento:</b> {user.dni}</div>
        </div>
        )
}

const History = ({historic}) =>{    
const historicArray = historic.map((Item) => { return(<div>{Item.date}</div>)
});
console.log(historicArray)
    return historicArray;
}

const Profile = ({user}) =>{
   // console.log('history');
  // console.log(<History historic={user.historic}></History>);
    return(
        <div className="ProfileStructure">
            <div className="space" >Profile</div>
            <ProfileInfo user={user}></ProfileInfo>
            <div className="space">Create Appointment</div>
            <Appointment></Appointment>
            <div className="space">Appointments historic</div>
            <History historic={user.historic} className="history"></History>
        
        </div>
    );
}


export default Profile;