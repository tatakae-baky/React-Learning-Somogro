import React, { useEffect, useState } from "react";
import Country from "../country/country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,ccn3,population"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (flagUrl) => {
    if (!visitedCountries.includes(flagUrl)) {
      const newCountries = [...visitedCountries, flagUrl];
      setVisitedCountries(newCountries);
      console.log("Visited countries:", newCountries);
    }
  };

  return (
    <div>
      <h3>Total Countries: {countries.length} </h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        {visitedCountries.map((flagUrl, idx) => (
          <img
            key={idx}
            src={flagUrl}
            alt={`Visited country flag ${idx + 1}`}
            style={{ width: "50px", height: "30px", margin: "5px" }}
          />
        ))}
      </div>
      <div className="country-container">
        {countries.map((country, idx) => (
          <Country
            key={idx}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
