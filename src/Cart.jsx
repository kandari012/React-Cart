import React, { Component } from "react";
import CartItem from "./CartItem"; //import cartitem

export class Cart extends Component {
  constructor() {
    //constuctor
    super(); //need to call constructor of parent React.component
    this.state = {
      product: [
        {
          price: 999,
          title: "Laptop",
          qty: 3,
          img: "",
          id: 1,
        },
        {
          price: 989,
          title: "Mobile phone",
          qty: 7,
          img: "",
          id: 2,
        },
        {
          price: 9899,
          title: "TV",
          qty: 8,
          img: "",
          id: 3,
        },
      ],
    };
  }

  render() {
    const { product } = this.state;
    return (
      <div className="cart">
        {product.map((product) => {
          return (
            <CartItem
              price={product.price}
              title={product.title}
              qty={product.qty}
              img={product.img}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
