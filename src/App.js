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

function App() {
console.log(process.env.APP_URL);
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
useEffect(() => {
  const token = localStorage.getItem('authToken')
  axios.get(process.env.APP_URL + '/client/logInClient',
    {
      headers: {
        Authorization: token
      }
    })
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
              <Route path='/client/logInClient' exact ><Login setUser={setUser} /></Route>
              <Route path='/client/registerClients' component={Register} exact />
            </Switch>
          </BrowserRouter>
        </div>
      );
}

export default App;
