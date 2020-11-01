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
useEffect(() => {
  const tokenn = localStorage.getItem('authToken')
  axios.post('http://localhost:5000/client/getClient',{headers: { Authorization:'Basic '+ tokenn }})
    .then(res => {
      setUser(res.data)
    })
}, [])
      return (
        <div>
          <BrowserRouter>
            <Header user={user} setUser={setUser}/>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/profile' exact ><Profile user={user} setUser={setUser} ><Appointment user={user} setUser={setUser} /></Profile></Route>
              <Route path='/client/logInClient' exact ><Login setUser={setUser} /></Route>
              <Route path='/client/registerClients' component={Register} exact />
            </Switch>
          </BrowserRouter>
        </div>
      );
}

export default App;
