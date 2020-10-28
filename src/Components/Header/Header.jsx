import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

// class Header extends React.component{
//     constructor(props){
//         super(props)
//         this.state = {
//             Header
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
        const logout = () => {
            localStorage.clear();
            // props.setUser(null)
            setUser(null)
        }
    return (
        <header className="header">
            <Link to ="/" >Home</Link>
            {user ?
                <div className="loggedIn">
                {['admin','Dios'].includes(user.role) &&<Link to="/users">users</Link> }
                    <Link to="/profile">{user.email} - {user.role}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/client/logInClient">Login</Link>
                    <Link to="/client/registerClients">Registro</Link>
                </div>}

        </header>
    )
}
export default Header;

