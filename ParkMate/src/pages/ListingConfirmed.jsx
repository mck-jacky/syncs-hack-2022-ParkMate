import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import park5 from "../images/parking-list5.jpg"
import googlemap from "../images/googlemap.png"
import loader from "../images/loading.gif"
import { Link } from "react-router-dom";

function ListingConfirmed() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  if (loading) {
    return (
      <div>
        <Header />
  
        <div className="container">
          <Sidebar/>
          
          <img className="loader" src={loader} alt="loading"/>

        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
  
        <div className="container">
          <Sidebar/>
          <div className="listing-container">
            
            <div className="listing-header">
              <span className="system-font">Your new listing is now live!</span>
            </div>
  
            <div className="search-result-content">
  
              <Park image={park5} address="Hunter St, CBD 2000" price="5" owner="janesmith"/>
            </div>
          </div>
        </div>
        <br/>
      </div>
    )
  }

  
  
}

const Park = ({ image, address, owner, price }) => {
  return (
    <div className="search-result-google-map">
      <div className="search-result-font" >{address}</div>
      <div className="search-result-font search-result-margin">${price}/hr</div>
      <img className="parking-list-image search-result-margin" src={park5} alt="parking"/>
      <div className="search-result-font">6 kilometres away</div>
      <div className="search-result-font">listed by @{owner}</div>
      <div className="search-result-font">★ 4.82 (52)</div>
    </div>
  )
}

export default ListingConfirmed