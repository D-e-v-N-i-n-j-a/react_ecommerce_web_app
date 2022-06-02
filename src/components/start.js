import React from  'react';
import NavBar from './navbar';
import Presentation from './presentation';
import FeaturedProducts from './featured-products';
import ProductAdvertise from './advitising';
import ShowCase from './showcase';
const MainContainer = ()=>{
    return (
        <section >
           <NavBar />
           < Presentation />
           <FeaturedProducts />
           <ProductAdvertise />
           <ShowCase />
        </section>
    );
}
export default MainContainer;




