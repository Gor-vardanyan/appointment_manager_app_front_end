import React from 'react';
import "./Profile.scss";

const Profile = (props) =>{
    const  History = ({historic}) =>{
        let  historicArray =[];
        historicArray = historic?.map((Item) => {
            return(<div className={Item.status?'active':'done'}>
                        {Item.date} - {Item.status ?
                        'Pending'
                        :'Finished'}
                    </div>
            )})
            return (<div>{historicArray}</div>);
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
            {props.user.doctor
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