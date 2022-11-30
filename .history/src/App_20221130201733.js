import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [located, setLocated] = useState(false);
  const [cityName, setCityName] = useState();
  const [subCity, setSubCity] = useState();

  const geolocationAPI = navigator.geolocation;

  const inputHandler = (event) => {
    setCityName(event.target.value);
  };
  const clickHandler = () => {
    setSubCity(cityName);
  };
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
          setLocated(true);
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };

  if (!located) {
    return (
      <>
        <button onClick={() => getUserCoordinates()}>Locate me</button>
        <input
          type="text"
          className="form-control"
          onChange={inputHandler}
          value={cityName}
        />
        <button type="button" onClick={clickHandler} className="btn">
          Save
        </button>
      </>
    );
  }
  return (
    <div>
      <Header />
      <Store lat={lat} long={long} located={located} city={subCity}>
        <Details />
      </Store>
    </div>
  );
}

export default App;
