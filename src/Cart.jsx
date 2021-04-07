import React, { Component } from "react";
import CartItem from "./CartItem"; //import cartitem

export class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}

export default Cart;
