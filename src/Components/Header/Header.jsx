import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../../images/dentalogo.png'; // Tell webpack this JS file uses this image
import { Switch } from 'react-router-dom';

console.log(logo); // /logo.84287d09.png


// class Header extends React.component{
//     constructor(props){
//         super(props)
//         this.state = {
//             user
//         }
//     }
// }
//     render() {
//         return <div className="user">
//             <h2 className="name">
//                 {this.state.user.name}
//             </h2>
//         </div>
//     }
// }
const Header =(props)=> {
    const Admin = props.admin;
    const User = props.user;
    const Doctor = props.doctor

    const logoutUser =(name)=>{
        localStorage.clear();
        // props.setUser(null)
        props.setUser(null)
    }
    const logoutAdmin =(name)=>{
        localStorage.clear();
        // props.setUser(null)
        props.setAdmin(null)
    }
    const logoutDoctor =(name)=>{
        localStorage.clear();
        // props.setUser(null)
        props.setDoctor(null)
    }
        return (
            <header className="header">
                <img src={logo} alt="Logo" className="Headerlogo" />
                <div>Dental Care</div>
                <Link to ="/"className="home margin" >Home</Link>
                <Switch>
                    {props.user ?
                        <div className="loggedIn">
                            <Link to ="/profile" className="margin">Profile</Link>
                            <Link to ="/" className="margin" onClick={logoutUser(User)}>Logout</Link>

                        </div> :
                        <div className="notloggedIn">
                            <Link to="/client/logInClient" className="margin"  >Login</Link>
                            <Link to="/client/registerClients" className="margin" >Register</Link>
                        </div>}
                    {props.doctor ?
                        <div className="loggedIn">
                            <Link to ="/doctor/profile" className="margin">Profile</Link>
                            <Link to ="/doctor" className="margin" onClick={logoutDoctor(Doctor)}>Logout</Link>

                        </div> :
                        <div className="notloggedIn">
                            <Link to="/doctor/logInDoctor" className="margin"  >Login</Link>
                        </div>}
                    {props.admin ?
                        <div className="loggedIn">
                            <Link to ="/admin/profile" className="margin">Profile</Link>
                            <Link to ="/admin" className="margin" onClick={logoutAdmin(Admin)}>Logout</Link>

                        </div> :
                        <div className="notloggedIn">
                            <Link to="/admin/logInAdmin" className="margin"  >Login</Link>
                        </div>}      
                </Switch>

            </header>
        )
    }
export default Header;

