import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import park6 from "../images/parking-list6.jpg"
import googlemap from "../images/googlemap.png"
import loader from "../images/loading.gif"
import { Link } from "react-router-dom";

function Searchresult() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
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
              <span className="system-font">Your nearest match is...</span>
            </div>
  
            <div className="search-result-content">
  
              <Park image={park6} address="Phillip St, CBD 2000" price="8" owner="elainema"/>
              
              <ParkGoogleMap image={googlemap}/>
  
            </div>
  
          </div>
        </div>
      </div>
    )
  }

  
  
}

const Park = ({ image, address, owner, price }) => {
  return (
    <div>
      <div className="search-result-font" >{address}</div>
      <div className="search-result-font search-result-margin">${price}/hr</div>
      <img className="parking-list-image search-result-margin" src={image} alt="parking"/>
      <div className="search-result-font">6 kilometres</div>
      <div className="search-result-font">listed by @{owner}</div>
      <div className="search-result-font">★ 4.72 (52)</div>
    </div>
  )
}

const ParkGoogleMap = ( {image} ) => {
  return (
    <div className="search-result-google-map">
      <a href="https://www.google.com/maps/dir/School+of+Computer+Science,+The+University+of+Sydney,+Cleveland+Street,+Camperdown+NSW/Phillip+Street,+Sydney+NSW/@-33.8786398,151.1970505,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6b12b102fcacd017:0xcaa7b0523c3e01f6!2m2!1d151.1940845!2d-33.8882736!1m5!1m1!1s0x6b12ae6a1512eab1:0xc158e1a8e2e28de3!2m2!1d151.2113812!2d-33.8654651!3e0">
        <img className="parking-list-image" src={image} alt="parking"/>
      </a>
      <Link to ="/payment_">
        <input className="search-result-google-map-button" type="submit" value="BOOK NOW"/>
      </Link>
      <a href="https://www.google.com/maps/dir/School+of+Computer+Science,+The+University+of+Sydney,+Cleveland+Street,+Camperdown+NSW/Phillip+Street,+Sydney+NSW/@-33.8786398,151.1970505,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6b12b102fcacd017:0xcaa7b0523c3e01f6!2m2!1d151.1940845!2d-33.8882736!1m5!1m1!1s0x6b12ae6a1512eab1:0xc158e1a8e2e28de3!2m2!1d151.2113812!2d-33.8654651!3e0">
        <input className="search-result-google-map-button" type="submit" value="LET'S GO"/>
      </a>
      <Link to ="/search_result">
        <input className="search-result-google-map-button-refresh" type="submit" value="REFRESH"/>
      </Link>
    </div>
  )
}

export default Searchresult