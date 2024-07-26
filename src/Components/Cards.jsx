import "../styles/Components/cards.css";

const Cards = ({ country }) => {
  return (
    <div className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <p> Cap: {country.capital}</p>
        <p>Pop: {country.population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Cards;
