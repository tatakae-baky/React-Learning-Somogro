import React, { useState } from "react";
import "./country.css";
import Countries from "../countries/Countries";

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, region, population, ccn3 } = country;

  const [isVisited, setIsVisited] = useState(false);

  const handleVisit = (country) => {
    setIsVisited(!isVisited);
  };

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Country : {name.common} </h3>
      <div className="country-details">
        <p>Region: {region} </p>
        <p>Population : {population} </p>
      </div>
      <div className="button">
        <button onClick={handleVisit}>{isVisited ? "Visited" : "Visit"}</button>
        <button onClick={() => {handleVisitedCountries(flags.png)}}>Mark Visited</button>
      </div>
    </div>
  );
};

export default Country;