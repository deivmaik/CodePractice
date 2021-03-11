import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>Michae, thanks for your purchase</h2>
        <span>Your order will be delivered to your address:</span>
        <div className="Success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;