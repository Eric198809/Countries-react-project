import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import "../styles/Components/countries.css";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(20);
  const radios = ["Africa", "Asia", "America", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li className="continents-name">
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
        ,
      </ul>

      <div className="countriesList">
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .slice(0, rangeValue)
          .map((country, index) => (
            <Cards key={index} country={country} />
          ))}
      </div>
    </>
  );
};

export default Countries;
