import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };
    loadData();
  }, []);
  return (
    <div>
      <h1>Country: {countries.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {countries.map((country, index) => (
          <div key={index}>
            <Country country={country} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
