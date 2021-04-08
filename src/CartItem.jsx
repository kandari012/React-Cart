import React from "react"; //import react from react module

function CartItem(props) {
  const { price, title, qty, id, img } = props.product;
  const {
    onDecreaseQuantity,
    product,
    onIncreaseQuantity,
    onDeleteQuantity,
  } = props; // object destructuring
  //for a class component to be reat component we give it a method render
  // return jsx that will descibe our UI
  return (
    <div className="cart-item">
      {/* {use css from index.js} */}
      <div className="left-block">
        {/* {need to pass object to style will use {} and iside this will use js code} */}
        <img style={styles.image} src={img} alt="" />
      </div>
      <div className="right-block">
        {/* {another way of adding styles} */}
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs{price}</div>
        <div style={{ color: "#777" }}>Qty :{qty}</div>
        <div className="cart-item-actions">
          {/* {add buttons} */}
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1617642314~hmac=584195f49ca6878a19183f9b6011c3e1"
            alt="increase"
            className="action-icons"
            // {fxn will be called whenever we call the plus}
            onClick={() => {
              onIncreaseQuantity(product);
            }}
            //   {adding onclick event on img}
          />
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/56/56889.svg?token=exp=1617642348~hmac=be6f054fe8a8fac0e4cc959736d05e9a"
            alt="decrease"
            className="action-icons"
            onClick={() => {
              onDecreaseQuantity(product);
            }}
          />
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"
            alt="delete"
            className="action-icons"
            onClick={() => {
              onDeleteQuantity(id);
            }}
          />
        </div>
      </div>
    </div>
  );
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
