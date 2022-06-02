import React from 'react';
import Product from './product';
const FeaturedProducts = ()=>{
    const image = require("../img/nike2.png");
    const image1 = require("../img/shirt.png");
    const image2 = require("../img/head.png");
    const image3 = require("../img/jacket.png");
    return (
      <div className="Feature-Products-ctx">
        <div className="featureProducts">
          <h3>Most Popular</h3>
          <div className="feature-product-container">
            <Product image = {image} />
            <Product image = {image1} />
            <Product image = {image2} />
            <Product image = {image3} />
            <Product image = {image3} />
            {/* <Product /> */}
          </div>
        </div>
        <div className='arrow-container'>
          <i className='fas fa-arrow-alt-circle-left'></i>
          <i className='fas fa-arrow-alt-circle-right'></i>
        </div>
      </div>
    );
}

export default FeaturedProducts;


