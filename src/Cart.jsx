import React from "react";
import CartItem from "./CartItem"; //import cartitem

function Cart(props) {
  const {
    products,
    onDeleteQuantity,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDeleteQuantity={onDeleteQuantity}
          />
        );
      })}
    </div>
  );
}

export default Cart;
