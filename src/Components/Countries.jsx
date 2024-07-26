import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import refresh from "../assets/refresh.svg";
import "../styles/Components/countries.css";

const Countries = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [rangeValue, setRangeValue] = useState(250);
  const radios = ["Africa", "Asia", "America", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  const filterDataName = data.filter((country) =>
    country.translations.fra.common.toLowerCase().includes(search.toLowerCase())
  );

  const removeSearch = ()=> {
    setSearch("")
    setSelectedRadio("")
  }




  return (
    <>
      <div className="input-search-container">
        <input className="input-search"
          type="text"
          value={search}
          placeholder="Recherchez un pays"
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={refresh} alt="refresh" onClick={removeSearch} />
      </div>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent, index) => (
          <li className="continents-name" key={index}>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={selectedRadio === continent}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
        ,
      </ul>

      <div className="countriesList">
        {filterDataName
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
