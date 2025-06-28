import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, region, population, ccn3 } = country;

  const [isVisited, setIsVisited] = useState(false)

  const handleVisit = () => {
    setIsVisited(!isVisited)
  }

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Country : {name.common} </h3>
      <div className="country-details">
        <p>Region: {region} </p>
        <p>Population : {population} </p>
      </div>
      <button onClick={handleVisit}>{isVisited? "Visited" : "Visit"}</button>
    </div>
  );
};

export default Country;