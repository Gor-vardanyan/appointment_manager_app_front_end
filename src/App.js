import React from 'react';
//import './App.css';
import './App';
import {useState} from 'react';
import Header from './Components/Header/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/LoginClient';
import Register from './containers/Register/Register';
import Doctor from './containers/Doctor/Doctor';
//import axios from 'axios';
import Profile from './containers/Profile/Profile'
import Appointment from './containers/Appointment/Appointment'
import Schedule from './containers/Schedule/Schedule'

function App() {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <div>
      <BrowserRouter>
            <Header user={user} setUser={setUser}/>
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/profile' exact >
                <Profile user={user}>
                  {user?.doctor
                  ?<Schedule/>
                  :<Appointment user={user} setUser={setUser} />
                  }
                </Profile>
              </Route>
              <Route path='/client/logInClient' exact >
                <Login  setUser={setUser} />
              </Route>
              <Route path='/client/registerClients' component={Register} exact />
              <Route path='/doctor' exact >
                <Doctor setUser={setUser} ></Doctor>
              </Route>
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
