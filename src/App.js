import Navbar from "./Navbar";
import Cart from "./Cart";
import React, { Component } from "react";
import firebase from "firebase";

export class App extends Component {
  constructor() {
    //constuctor
    super(); //need to call constructor of parent React.component
    this.state = {
      products: [],
      loading: true,
    };
  }
  //will load the products from firebase
  componentDidMount() {
    firebase
      .firestore()
      .collection("products") //on which collection the query need to done
      .get() //will return a promise as a result in promise will give a query snapshot
      .then((snapshot) => {
        console.log(snapshot); // snapshot of the collection

        // itreate over all the docs inside the collection
        snapshot.docs.map((doc) => {
          console.log(doc.data()); //retrive all the data from document as an object
        });
        // add all the data in product and id seperately
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          console.log(doc.data());
          return data;
        });

        this.setState({ products, loading: false });
      });
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
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount} />
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading.....</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
