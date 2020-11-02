import React from 'react';
//import './App.css';
import './App';
import {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/LoginClient';
import Register from './containers/Register/Register';
import axios from 'axios';
import Profile from './containers/Profile/Profile'
import Appointment from './containers/Appointment/Appointment'

function App() {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
const [doctor, setDoctor] = useState(JSON.parse(localStorage.getItem('doctor')));
const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')));

useEffect((user,doctor,admin) => {
  if(user!==null){
    const token = localStorage.getItem('authToken')
    axios.post('http://localhost:5000/client/getClient',{headers: { Authorization:'Basic '+ token }})
    .then(res => {
      setUser(res.data)
    })
    }else if(doctor!==null){
        const tokenDoctor = localStorage.getItem('authToken')
        axios.post('http://localhost:5000/doctor/getDoctor',{headers: { Authorization:'Basic '+ tokenDoctor }})
        .then(res => {
          setDoctor(res.data)
        })
        }else if(admin!==null){
          const tokenAdmin = localStorage.getItem('authToken')
          axios.post('http://localhost:5000/doctor/getDoctor',{headers: { Authorization:'Basic '+ tokenAdmin }})
          .then(res => {
            setAdmin(res.data)
          }).catch(err => console.log(err))
        }
}, []);

      return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <Header user={user} setUser={setUser}/>
                <Switch>
                  
                  <Route path='/' component={Home} exact />
                  <Route path='/profile' exact >
                    <Profile user={user} setUser={setUser}>
                      <Appointment user={user} setUser={setUser} />
                    </Profile>
                  </Route>
                  <Route path='/client/logInClient' exact ><Login setUser={setUser} /></Route>
                  <Route path='/client/registerClients' component={Register} exact />
                
                </Switch>
              </Route> 
              
              <Route path="/doctor" exact>
                <Header doctor={doctor} setDoctor={setDoctor}/>
                <Switch>

                  <Route path='/doctor' component={Home} exact />
                  <Route path='/doctor/profile' exact >
                    <Profile doctor={doctor} setDoctor={setDoctor}>
                      <Appointment doctor={doctor} setDoctor={setDoctor} />
                    </Profile>
                  </Route>
                  <Route path='/doctor/logInDoctor' exact ><Login setDoctor={setDoctor} /></Route>
                
                </Switch>
              </Route> 
              
              <Route path="/admin" exact>
                <Header admin={admin} setAdmin={setAdmin}/>
                <Switch>
              
                  <Route path='/admin' component={Home} exact />
                  <Route path='/admin/profile' exact >
                    <Profile admin={admin} setAdmin={setAdmin}></Profile>
                  </Route>
                  <Route path='/admin/logInAdmin' exact ><Login setAdmin={setAdmin} /></Route>
              
                </Switch>
              </Route> 
            
            </Switch>
          </BrowserRouter>

        </div>
      );
}

export default App;
