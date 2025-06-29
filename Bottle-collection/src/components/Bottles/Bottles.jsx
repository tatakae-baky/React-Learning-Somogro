import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleCart = (bottle) => {
    console.log('this bottle is gonna be added to the list')
    const newCart = [...cart, bottle]
    setCart(newCart)
    console.log(newCart);
  }

  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <Cart cart = {cart} ></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id}
           bottle={bottle}
           handleCart = {handleCart}
           ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;