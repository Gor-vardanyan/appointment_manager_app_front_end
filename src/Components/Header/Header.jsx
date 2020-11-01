import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

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
const Header = ({user,setUser}) => {

        const appointment = () => {

        }
        const profile = () => {

        }
        const logout = () => {
            localStorage.clear();
            // props.setUser(null)
            setUser(null)
        }
    return (
        <header className="header margin_1">
            <Link to ="/" >Home</Link>
            {user ?
                <div className="loggedIn">
                    <Link to ="/appointment"  className="appointment" onClick={appointment}>Appointment</Link>
                    <Link to ="/profile" className="profile" onClick={profile}>Profile</Link>
                    <Link to ="/" className="logout" onClick={logout}>Logout</Link>

                </div> :
                <div className="notLoggedIn margin_1">
                    <Link to="/client/logInClient">Login</Link>
                    <Link to="/client/registerClients">Register</Link>
                </div>}

        </header>
    )
}
export default Header;

