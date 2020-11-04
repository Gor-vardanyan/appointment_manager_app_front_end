import React from 'react';
import axios from 'axios';

const Schedule =({user}) =>{
    const Dates = ()=>{
        let historicArray = [];
        const token = localStorage.getItem('authToken')
        axios.post('http://localhost:5000/doctor/dates',{}, {
            headers: { Authorization:'Basic '+ token }
        }).then(res => {
            historicArray = res.data.doctor?.map((Item) => {
                return(<div className={Item.status?'active':'done'}>
                            {Item.date} - {Item.status ?
                            'Pending'
                            :'Finished'}
                        </div>
                )})
                return (<div>{historicArray}</div>);
        })
        .catch(error => {console.log(error)});
    }
    return(<div>
        <Dates></Dates>
    </div>);
}
export default Schedule;