import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SidebarFind from "../components/SidebarFind";
import park5 from "../images/parking-list5.jpg"
import googlemap from "../images/googlemap.png"
import loader from "../images/loading.gif"
import { Link } from "react-router-dom";
import pay from "../images/payment.png"

function SearchResult() {
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
          <SidebarFind/>
          
          <img className="loader" src={loader} alt="loading"/>

        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
  
        <div className="container">
          <SidebarFind/>
          <div className="listing-container">
            
            <div className="listing-header">
              <span className="best-match-font">Your best match is...</span>
            </div>
  
            <div className="search-result-content">
  
              <Park image={park5} address="Hunter St, CBD 2000" price="5" owner="janesmith"/>
              
              {/* <ParkGoogleMap image={googlemap}/> */}
  
            </div>
  
  
          </div>

          <div className="payment-container-new">
            
            <div className="listing-header">
              <span className="best-match-font">Book Now</span>
            </div>
  
            <img className="pay" src={pay} alt="pay"/>
  
            <div className="container">
              <input className="book-button" type="submit" value="BOOK NOW•ParkMate"/>
              <Link to = "/search_result_form">
                <div className="another-option">Looking for another?</div>
              </Link>
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
      <img className="parking-list-image search-result-margin" src={park5} alt="parking"/>
      <div className="search-result-font">12:00pm - 3:00pm</div>
      <div className="search-result-font">listed by @{owner}</div>
      <div className="search-result-font">★ 4.82 (52)</div>
    </div>
  )
}

const ParkGoogleMap = ( {image} ) => {
  return (
    <div className="search-result-google-map">
      <a href="https://www.google.com/maps/dir/School+of+Computer+Science,+The+University+of+Sydney,+Cleveland+Street,+Camperdown+NSW/Hunter+St,+Sydney+NSW+2000/@-33.8788909,151.1970505,15z/data=!4m15!4m14!1m5!1m1!1s0x6b12b102fcacd017:0xcaa7b0523c3e01f6!2m2!1d151.1940845!2d-33.8882736!1m5!1m1!1s0x6b12ae41d1538469:0x7a3ea1d20c1efaec!2m2!1d151.2096983!2d-33.8660911!3e0!5i1">
        <img className="parking-list-image" src={image} alt="parking"/>
      </a>
      <Link to ="/payment">
        <input className="search-result-google-map-button" type="submit" value="BOOK NOW"/>
      </Link>
      <a href="https://www.google.com/maps/dir/School+of+Computer+Science,+The+University+of+Sydney,+Cleveland+Street,+Camperdown+NSW/Hunter+St,+Sydney+NSW+2000/@-33.8788909,151.1970505,15z/data=!4m15!4m14!1m5!1m1!1s0x6b12b102fcacd017:0xcaa7b0523c3e01f6!2m2!1d151.1940845!2d-33.8882736!1m5!1m1!1s0x6b12ae41d1538469:0x7a3ea1d20c1efaec!2m2!1d151.2096983!2d-33.8660911!3e0!5i1">
        <input className="search-result-google-map-button" type="submit" value="LET'S GO"/>
      </a>
      <Link to ="/search_result_">
        <input className="search-result-google-map-button-refresh" type="submit" value="REFRESH"/>
      </Link>
    </div>
  )
}

export default SearchResult