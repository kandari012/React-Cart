import React from "react"; //import react from react module

class CartItem extends React.Component {
  constructor() {
    //constuctor
    super(); //need to call constructor of parent React.component
    this.state = {
      //state
      price: 9899,
      title: "Mobile phone",
      qty: 3,
      img: "",
    };
  }
  // inherit from class component from reat package
  render() {
    const { price, title, qty } = this.state; // object destructuring
    //for a class component to be reat component we give it a method render
    // return jsx that will descibe our UI
    return (
      <div className="cart-item">
        {/* {use css from index.js} */}
        <div className="left-block">
          {/* {need to pass object to style will use {} and iside this will use js code} */}
          <img style={styles.image} src="" alt="" />
        </div>
        <div className="right-block">
          {/* {another way of adding styles} */}
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs{price}</div>
          <div style={{ color: "#777" }}>Qty :{qty}</div>
          <div className="cart-item-actions">
            {/* {add buttons} */}
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/32/32563.svg?token=exp=1617639776~hmac=32812420a39c29ffebf0a0121f4f8ba7"
              alt="increase"
              className="action-icons"
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/56/56889.svg?token=exp=1617640457~hmac=390c58934e7a5079a4bff0247a5b53f0"
              alt="decrease"
              className="action-icons"
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1617640513~hmac=f632e0faafd3607ff50084f42166140c"
              alt="decrease"
              className="action-icons"
            />
          </div>
        </div>
      </div>
    );
  }
}
// object to aplly style to the jsx elements
const styles = {
  image: {
    height: 100, //no need to add pixil js will do automatically for us
    width: 110,
    borderRadius: 4, //need to use camel case not border-radius
    backgroung: "#ccc",
  },
};

export default CartItem; //exporting component
