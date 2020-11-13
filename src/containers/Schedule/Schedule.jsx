import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Schedule =() =>{
    const [dates, setDates] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('authToken')
        axios.post(process.env.APP_URL+'/doctor/dates',{}, {
            headers: { Authorization:'Basic '+ token }
        }).then(res => {
            setDates(res.data)
        })
        .catch(error => {console.log(error)});
 
    }, [])

    return(<div>
                  {dates?.map((Item) => {
                return(<div className={Item.status?'active':'done'}>
                            {Item.date} - {Item.status ?
                            'Pending'
                            :'Finished'}
                        </div>
                )})}
    </div>);
}
export default Schedule;