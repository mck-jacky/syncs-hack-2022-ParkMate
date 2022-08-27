import React from "react";
import { Link } from 'react-router-dom' 
import Notifications from './Notifications'
import Settings from './Settings'
import Chat from './Chat'
import logo from '../images/PARKMATE.jpg'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
  return (
    <div>
        <div className="header">
        
            <Link to = "/main">
                <img className="logo" src={logo} alt="user-icon"/>
            </Link>

            <div className="header-tool">
                <a href="/matching" className="header-nav-tool-text">Match </a>
                <a href="/search_parking" className="header-nav-tool-text">Find </a>
                <a href="/list_parking" className="header-nav-tool-text">List </a>
                <Chat />
                <CgProfile className="header-nav-tool"/>
            </div>
            
            {/* <a href="/search_parking" className="header-button-find">Find </a>
            <a href="/list_parking" className="header-button-list">List </a>

            <div className="header-nav-tool">
                <Chat />
                <CgProfile className="header-nav-tool"/>
            </div> */}

        </div>

        {/* <hr className="divider"/> */}
    </div>
    
)
}

export default Header