import React,{Component} from 'react';
// const img1 = require("../img/nike2.png");

class Product extends Component {
  state = { active: false };
  mouseLeave = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState({ active: (this.state.active = false) });
  };
  handleClick = (e) => {
    this.setState({ active: (this.state.active = true) });
  };
  // EVENT WHEN THE HEART BUTTON IS CLICKED;
  heartHandler =(e)=>{
    const img = e.target.parentElement.parentElement.children[0].src;
    const itemName =e.target.parentElement.parentElement.children[3].children[0].innerText
    const itemPrice = e.target.parentElement.parentElement.children[3].children[1].innerText;
    console.log(itemName);
    console.log(itemPrice);
  }
  render() {
    return (
      <div
        onMouseLeave={this.mouseLeave}
        onMouseOver={this.handleClick}
        className="product-container"
      >
        <img src={this.props.image.default} alt="logo" srcset="" />
        <div className="price-percentage">
          <span className="percentage-ctx">{this.props.percentage}</span>
        </div>
        <div
          className={
            this.state.active ? "emoji-selection showIcons" : "emoji-selection"
          }
        >
          <i
            onClick={this.heartHandler}
            class="fa fa-heart"
            aria-hidden="true"
          ></i>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-info-circle" aria-hidden="true"></i>
        </div>
        {/* Information */}
        <div className="product-info">
          <h3>{this.props.name}</h3>
          <span>{this.props.price}</span>
          <div className="strike">
            <strike>Ghc 98.00</strike>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;








