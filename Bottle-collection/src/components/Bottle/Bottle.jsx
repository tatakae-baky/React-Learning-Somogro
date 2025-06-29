import React from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, price, id, img } = bottle;
  return (
    <div className="bottle">
      <h3>{name} </h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
      <button>Purchase</button>
    </div>
  );
};

export default Bottle;