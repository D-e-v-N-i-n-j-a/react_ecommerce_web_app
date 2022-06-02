import React, { Component } from "react";
import MenuItems from "./menuItems";
class NavBar extends Component {
  state = { clicked: false };
  handleClick = ()=>{
      this.setState({ clicked: !this.state.clicked });
  }
  render() {
    return (
      <nav className="navBarItems">
        <div class="logo-container">
          <h1>
            React <i className="fab fa-react"></i>{" "}
          </h1>
        </div>
        <ul className={this.state.clicked ? "nav-link active" : "nav-link"}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a href={items.link} className={items.cName}>
                  {items.title}
                </a>{" "}
              </li>
            );
          })}
        </ul>
        {/* BUTTONS SIGN IN AND SIGNUP */}
        <div className="btn">
          <button>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </button>
          <button>
            <i class="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <div class="handburger" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fa fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBar;
