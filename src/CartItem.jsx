import React from "react"; //import react from react module

class CartItem extends React.Component {
  // inherit from class component from reat package
  render() {
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
          <div style={{ fontSize: 25 }}>Phone</div>
          <div style={{ color: "#777" }}>Rs 999</div>
          <div style={{ color: "#777" }}>Qty :1</div>
          <div className="cart-item-actions">{/* {add buttons} */}</div>
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
