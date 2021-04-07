import React, { Component } from "react";
import CartItem from "./CartItem"; //import cartitem

export class Cart extends Component {
  render() {
    const arr = [1, 2, "hi"];
    return (
      <div className="cart">
        {/* <CartItem />
        <CartItem />
        <CartItem /> */}
        {arr.map((item) => {
          return item + 5;
        })}
      </div>
    );
  }
}

export default Cart;
