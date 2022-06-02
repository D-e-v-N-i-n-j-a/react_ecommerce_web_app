
import React from 'react';
const imgBag = require('../img/matebook.png')


const Presentation =()=>{
    return (
      <div className="presentation-ctx">
        <div className="Presentation-show">
          <h4>Last Minute Guide</h4>
          <h1>Up to 50% Off everything you buy</h1>
          <div className="presentation-button">
            <span>
              Grow Your Business With Our Unified Ecommerce Platform. Start a 14
              Day Free Trial Now. Quick & Easy Setup - Everything You Need To
              Start Selling Online Today. Fraud Prevention. SEO Optimized. Drop
              Shipping Integration. Accept Credit Cards. Fulfillment Integration
            </span>
          </div>
          <button className="show-btn">Shop Now</button>
        </div>

        {/* SHOW CASE IMAGE SECTION */}
        <div className="Image-presentation">
          <img src={imgBag.default} alt="" />
        </div>
      </div>
    );
}


export default Presentation;




