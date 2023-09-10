const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;

  const countryStyle = {
    border: "2px solid red",
    padding: "15px",
    margin: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={countryStyle}>
      <p>Name:{name?.common}</p>
      <img src={flags?.png} alt={name?.common} />
    </div>
  );
};

export default Country;
