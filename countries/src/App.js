import React, {useEffect, useState} from "react";
import './App.css';



export default function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountries(data))
    .catch((e) => console.error("Error fetching data:", e))

  }, []);



  return (
    <div className="container">

      {countries.map((country) => (

        <div key={country.cca3} className="card">

          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="image"
          />

          <h2>{country.name.common}</h2>

        </div>
      ))}

    </div>
  );
}


