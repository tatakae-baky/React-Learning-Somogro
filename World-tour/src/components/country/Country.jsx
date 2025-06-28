import React from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, region, population, ccn3 } = country;

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h3>Name : {name.common} </h3>
      <div className="country-details">
        <p>Region: {region} </p>
        <p>Population : {population} </p>
      </div>
    </div>
  );
};

export default Country;
