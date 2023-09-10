import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca2 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div
      className={`border-2 border-red-400 m-5 p-5 rounded-lg ${
        visited && "bg-green-200"
      }`}
    >
      <p>Name:{name?.common}</p>
      <img
        src={flags?.png}
        alt={name?.common}
        className="h-40 w-full rounded-md"
      />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca2}</p>
      <button onClick={handleVisited} className="btn btn-primary mr-5">
        {visited ? "Visited" : "Going"}
      </button>
      <>
        {visited
          ? "I have visited this country."
          : "I want to visit this country"}
      </>
      <div className="py-5 flex justify-center">
        <button
          onClick={() => handleVisitedCountry(country)}
          className="btn btn-success"
        >
          Mark Visited
        </button>
      </div>
    </div>
  );
};

export default Country;
