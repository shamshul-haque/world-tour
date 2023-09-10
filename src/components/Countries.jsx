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
      {countries.map((country, index) => (
        <div key={index}>
          <Country country={country} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
