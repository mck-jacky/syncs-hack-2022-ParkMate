import React from "react";
import user_icon from "../images/user-icon.jpeg"
import { Link } from 'react-router-dom' 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="user-icon" src={user_icon} alt="user-icon"/>

      <div className="user-info">
        <span className="user-name">@John Doe</span>
        <div className="user-stat">
            <span className="user-stat-font">1 renting</span>
            <span className="user-stat-font">3 available</span>
        </div>
      </div>
      <Link to ="/list_parking">
        <input className="side-bar-button" type="submit" value="LIST PARKING"/>
      </Link>
      <Link to ="/search_parking">
        <input className="side-bar-button" type="submit" value="FIND A SPOT"/>
      </Link>
    
      

    </div>
  )
}

export default Sidebar