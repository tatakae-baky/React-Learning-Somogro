import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

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
    console.log(bottle);
    const newCart = [...cart, bottle]
    setCart(newCart)
  }

  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <h4>Cart: {cart.length} </h4>
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