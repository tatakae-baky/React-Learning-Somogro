import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";
import { addToLS, getCart } from "../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedItems = getCart();
      const savedCart = []
      for (const id of storedItems){
        const bottle = bottles.find(bottle => bottle.id === id);
        if (bottle){
          savedCart.push(bottle)
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    console.log(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h3>Total Bottles: {bottles.length}</h3>
      <Cart cart={cart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleCart={handleCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;