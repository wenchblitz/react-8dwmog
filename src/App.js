import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const countries = [
    { id: '1', name: 'Philippines' },
    { id: '2', name: 'Japan' },
  ];

  const states = [
    { id: '1', countryId: '1', name: 'Cebu' },
    { id: '2', countryId: '1', name: 'Negros' },
    { id: '3', countryId: '2', name: 'Tokyo' },
    { id: '4', countryId: '2', name: 'Kyoto' },
  ];

  const cities = [
    { id: '1', stateId: '1', name: 'Lapu-Lapu' },
    { id: '2', stateId: '1', name: 'Mandaue' },
    { id: '3', stateId: '2', name: 'Bacolod' },
    { id: '4', stateId: '2', name: 'San Carlos' },
    { id: '5', stateId: '3', name: 'Hino' },
    { id: '6', stateId: '3', name: 'Tama' },
    { id: '7', stateId: '4', name: 'Seika' },
    { id: '8', stateId: '4', name: 'Ayabe' },
  ];

  useEffect(() => {
    setCountry(countries);
  }, []);

  const handleCountry = ({ target: { name, value } }) => {
    const dt = states?.filter((x) => x.countryId === value);
    setState(dt);
  };

  const handleStates = ({ target: { name, value } }) => {
    const dt = cities?.filter((x) => x.stateId === value);
    setCity(dt);
  };

  const handleCities = ({ target: { name, value } }) => {
    // const dt = states?.filter(x => x.countryId === value)
    // setState(dt)
    console.log(value);
  };

  // console.clear();
  // console.log(countries);

  return (
    <div className="App">
      <section>
        <select
          className="select-class"
          name="country"
          id="ddlCountry"
          onChange={(e) => handleCountry(e)}
        >
          <option value="0">Select Country</option>
          {country && country !== undefined
            ? country?.map(({ id, name }, i) => (
                <option key={i} value={id}>
                  {name}
                </option>
              ))
            : 'No Country'}
        </select>
      </section>
      <section>
        <select
          className="select-class"
          name="states"
          id="ddlStates"
          onChange={(e) => handleStates(e)}
        >
          <option value="0">Select State</option>
          {state && state !== undefined
            ? state?.map(({ id, name }, i) => (
                <option key={i} value={id}>
                  {name}
                </option>
              ))
            : 'No State'}
        </select>
      </section>
      <section>
        <select
          className="select-class"
          name="cities"
          id="ddlCities"
          onChange={(e) => handleCities(e)}
        >
          <option value="0">Select City</option>
          {city && city !== undefined
            ? city?.map(({ id, name }, i) => (
                <option key={i} value={id}>
                  {name}
                </option>
              ))
            : 'No State'}
        </select>
      </section>
    </div>
  );
}
