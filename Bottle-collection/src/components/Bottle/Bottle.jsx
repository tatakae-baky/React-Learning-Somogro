import React, { useState } from "react";
import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, price, id, img, stock } = bottle;
  const [purchase, setPurchase] = useState(false);
  const [currentStock, setCurrentStock] = useState(stock);

  // manage purchasing and stock controlling
  const handlePurchaseAndStock = () => {
    setPurchase(!purchase);
    if (!purchase) {
      const newStock = currentStock - 1;
      setCurrentStock(newStock);
    } else {
      setCurrentStock(stock);
    }
  };

  return (
    <div className="bottle">
      <h3>{name} </h3>
      <img src={img} alt="" />
      <div className="price-stock">
        <p>Price: {price}</p>
        <p>Stock: {currentStock} </p>
      </div>
      <button onClick={handlePurchaseAndStock}>
        {purchase ? "Purchased" : "Purchase"}
      </button>
    </div>
  );
};

export default Bottle;