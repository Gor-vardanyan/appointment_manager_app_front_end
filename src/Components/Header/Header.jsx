import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../../images/dentalogo.png'; // Tell webpack this JS file uses this image

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

    const logoutUser =()=>{
        localStorage.clear();
        // props.setUser(null)
        props.setUser(null)
    }
    
        return (
            <header className="header">
                <img src={logo} alt="Logo" className="Headerlogo" />
                <div>Dental Care</div>
                <Link to ="/"className="home margin" >Home</Link>
                    {props.user ?
                        <div className="loggedIn">
                            { !props.user.admin 
                            ?<Link to ="/profile" className="margin">Profile</Link>
                            :<Link to ="/administration" className="margin">Administration</Link>}
                            <Link to ="/" className="margin" onClick={logoutUser}>Logout</Link>

                        </div> :
                        <div className="notloggedIn">
                            <Link to="/client/logInClient" className="margin"  >Login</Link>
                            <Link to="/client/registerClients" className="margin" >Register</Link>
                        </div>}
            </header>
        )
    }
export default Header;

