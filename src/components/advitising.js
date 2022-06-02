import Product from "./product";
import ProductData from "./data";
const ProductAdvertise = () => {
  return (
    <div className="product-advertisement">
      <div className="product-cont">
        <h3>New Collections</h3>
        <a href="#">View All</a>
      </div>
      <div className="flex-container">
        {ProductData.map((item, index) => {
          return (
            <div>
              <Product
                image={item.image}
                percentage={item.per_cent}
                name={item.pro_name}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductAdvertise;
