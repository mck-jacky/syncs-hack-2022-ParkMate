import React from "react";
import image from '../images/parking.png'
import divider from '../images/Divider.png'
import google from '../images/google.png'
import { Link } from 'react-router-dom' 

const Register = () => {  
  return (
    <div className="login-container">   
      <img classname="login-image" src={image} alt="parking"/>

      <div className="login-container-main">
        
        <div className="login-top-right">

        <span>Already have an account? </span>
          <Link to ="/">
            <span className="theme-colour">Log In</span>
          </Link>
          
        </div>
        
        <div className="login-prompt">
          <div className="login">Register</div>
          <input className="input-box login-row" type="text" id="username" placeholder="Username"/>
          <input className="input-box login-row" type="password" id="password" placeholder="Password"/>
          <input className="input-box login-row" type="password" id="password" placeholder="Confirm Password"/>
          <Link to ="/profile">
            <input className="submit-button login-row" type="submit" value="CONTINUE"/>
          </Link>

          <img className="or-divider" src={divider} alt="divider"/>

          <Link to ="/profile">
            <img className="google-login" src={google} alt="google login"/>
          </Link>

        </div>

      </div>

    </div>
)

}

export default Register