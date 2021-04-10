import Navbar from "./Navbar";
import Cart from "./Cart";
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    //constuctor
    super(); //need to call constructor of parent React.component
    this.state = {
      products: [
        {
          price: 999,
          title: "Laptop",
          qty: 3,
          img:
            "https://images.techhive.com/images/article/2016/04/hp-envy-15.6_nontouch_left-facing-100654399-orig.jpg",
          id: 1,
        },
        {
          price: 989,
          title: "Mobile phone",
          qty: 7,
          img:
            "https://n1.sdlcdn.com/imgs/a/l/r/Swipe-Konnect-4E-Blue-Mobile-SDL545020952-1-5fb23.jpg",
          id: 2,
        },
        {
          price: 9899,
          title: "TV",
          qty: 8,
          img:
            "https://th.bing.com/th/id/OIP.3v8lhMz35V7l8bWLbVmuEwHaE4?pid=ImgDet&rs=1",
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

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    //finf the products whose id not equal to passed id
    // will return array of products whose is not deleted
    // need to check the syntex
    const items = products.filter((item) => item.id !== id);

    this.setState({ products: items });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return "";
    });
    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteProduct}
          products={products}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
