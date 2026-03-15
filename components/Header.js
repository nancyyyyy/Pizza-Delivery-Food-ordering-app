import React, {useState} from 'react';
import { LOGO_URL } from "../utils/constants";

const Header = ()=> {
const [logBtn, setLogBtn] = useState("Login");

    return <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
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