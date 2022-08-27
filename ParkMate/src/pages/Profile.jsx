import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import park1 from "../images/parking-list1.jpg"
import park2 from "../images/parking-list2.jpg"
import park3 from "../images/parking-list3.jpg"
import park4 from "../images/parking-list4.jpg"

const Profile = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <Sidebar/>
        <div className="listing-container">

          <div className="listing-header">
            <span className="system-font">Listings</span>
            <input className="search-bar" type="text" id="username" placeholder="Search"/>
          </div>
          
          <div className="parking-list">
            <ParkingListItem image={park1} address="Pitt St, CDB 2000" price="3"/>
            <ParkingListItem image={park2} address="Dixon St, Haymarket" price="5"/>
            <ParkingListItem image={park3} address="Sussex St, CDB 2000" price="4"/>
            <ParkingListItem image={park4} address="King St, CDB 2000 " price="10" occupied="true"/>
          </div>

        </div>
      </div>
    </div>
  )
}

const ParkingListItem = ({ image, address, price, occupied }) => {
  if (occupied === "true") {
    return (
      <div className="parking-list-item">
        <img className="parking-list-image" src={image} alt="parking"/>
        <div className="parking-list-item-info occupied-font">occupied</div>
        <div className="parking-list-item-info">{address}</div>
        <div className="parking-list-item-info">AUD ${price}/ hr</div>
      </div>
    )
  } else {
    return (
      <div className="parking-list-item">
        <img className="parking-list-image" src={image} alt="parking"/>
        <div className="parking-list-item-info">{address}</div>
        <div className="parking-list-item-info">AUD ${price}/ hr</div>
      </div>
    )
  }
  
  
}

export default Profile