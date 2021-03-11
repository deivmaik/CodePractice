import React from 'react';
import '../styles/components/Information.css'

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information:</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Full Name" name="name"/>
            <input type="text" placeholder="Email" name="email"/>
            <input type="text" placeholder="Address" name="address"/>
            <input type="text" placeholder="c/o" name="apto"/>
            <input type="text" placeholder="City Name" name="city"/>
            <input type="text" placeholder="Country" name="country"/>
            <input type="text" placeholder="State" name="state"/>
            <input type="text" placeholder="Postal Code" name="cp"/>
            <input type="text" placeholder="Phone Number" name="phone"/>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Go back
          </div>
          <div className="Information-next">
            Pay
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Orders:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item Name</h4>
            <span>10$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;