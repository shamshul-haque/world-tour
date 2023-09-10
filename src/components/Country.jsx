import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  console.log(country);
  const { name, flags, population, area, cca2 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountry);

  return (
    <div
      className={`border-2 border-red-400 m-5 p-5 rounded-lg ${
        visited && "bg-green-400"
      }`}
    >
      <p>Name:{name?.common}</p>
      <img src={flags?.png} alt={name?.common} class="h-40 w-full rounded-md" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca2}</p>
      <button onClick={handleVisited} className="btn btn-primary mr-5">
        {visited ? "Visited" : "Going"}
      </button>
      {visited
        ? "I have visited this country."
        : "I want to visit this country"}
    </div>
  );
};

export default Country;
