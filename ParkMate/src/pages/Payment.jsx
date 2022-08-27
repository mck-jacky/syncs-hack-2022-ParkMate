import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import park5 from "../images/parking-list5.jpg"

const Payment = () => {
  return (
    <div>
      <Header />

      <div className="container">
        <Sidebar/>
        <div className="payment-container">
          <div className="payment-container-left">
            
            <span className="title">Booking Summary</span>

            <div className="order-summary">
              <div className="time-title">Time</div>
              <div className="time">12:00pm - 3:00pm</div>
            </div>

            <span className="pay-title">Pay With</span>

            <input className="credit-card-number" type="text" id="credit-card-number" placeholder="Card number"/>

            <div className="credit-card-card-info">
              <input className="credit-card-number-2" type="text" id="credit-card-number" placeholder="Expiry"/>
              <input className="credit-card-number-2" type="text" id="credit-card-number" placeholder="CVV"/>
            </div>

            <input className="credit-card-number" type="text" id="postcode" placeholder="Postcode"/>

            <input className="book-button" type="submit" value="BOOK NOW"/>


          </div>

          <div className="payment-container-right">
            <img className="parking-list-image search-result-margin" src={park5} alt="parking"/>
            <div>Hunter St, CBD 2000 | ★ 4.82 (52)</div>
            <div>janesmith</div>
            <div className="title">Price details</div>
            <div className="price-box">
              <span>Total(AUD)</span>
              <span>$5.0</span>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

  

export default Payment