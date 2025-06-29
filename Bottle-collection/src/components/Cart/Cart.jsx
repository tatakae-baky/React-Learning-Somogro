import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Cart: {cart.length} </h3>
      <div className="cart-image">
        {cart.map((cart, index) => (
          <img key={index} src={cart.img}></img>
        ))}
      </div>
    </div>
  );
};

export default Cart;