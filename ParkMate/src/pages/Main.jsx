import React from "react";
import Header from "../components/Header";
import banner from "../images/banner.gif"


const Main = () => {
  return (
    <div>
      <Header />

      <img className="banner" src={banner} alt="banner"/>
      
    </div>
  )
}


export default Main