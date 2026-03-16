import React, {useState} from 'react';
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';

const Header = ()=> {
const [logBtn, setLogBtn] = useState("Login");

    return <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                   <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About us</Link></li>
                    <li> <Link to='/contact'>Contact us</Link></li>
                    <li> <Link to='/link'>Cart</Link></li>
                    <button 
                    className="log-button"
                    onClick={()=>logBtn==="Login"? setLogBtn("Logout") : setLogBtn("Login")}>
                        {logBtn}
                    </button>
                </ul>
            </div>
        </div>  
}

export default Header;