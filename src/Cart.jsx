import React, { Component } from "react";
import CartItem from "./CartItem"; //import cartitem

export class Cart extends Component {
  constructor() {
    //constuctor
    super(); //need to call constructor of parent React.component
    this.state = {
      products: [
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

  handleIncreaseQuantity = (product) => {
    const { products } = this.state; //get the product from state
    const index = products.indexOf(product); //find index of the product passed
    products[index].qty += 1; //increse quantity of the product
    //set state to rerender
    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state; //get the product from state
    const index = products.indexOf(product); //find index of the product passed
    if (products[index].qty > 0) {
      products[index].qty -= 1; //increse quantity of the product
      //set state to rerender
      this.setState({
        products,
      });
    }
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
