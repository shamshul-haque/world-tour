import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    loadData();
  }, []);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-2xl pt-5">
          Country: {countries.length}
        </h1>
        <h2 className="text-center font-bold text-xl pt-5">
          Visited Countries: {visitedCountry.length}
        </h2>
        <ul className="text-center">
          {visitedCountry.map((country, index) => (
            <li key={index} className="ml-10">
              {country?.name?.common}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {countries.map((country, index) => (
          <div key={index}>
            <Country
              country={country}
              handleVisitedCountry={handleVisitedCountry}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
