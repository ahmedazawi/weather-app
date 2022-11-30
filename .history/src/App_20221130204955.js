import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [located, setLocated] = useState(false);
  const [cityName, setCityName] = useState("");
  const [subCity, setSubCity] = useState();

  const inputHandler = (event) => {
    setCityName(event.target.value);
  };
  const clickHandler = () => {
    setSubCity(cityName);
  };
  const geolocationAPI = navigator.geolocation;
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

  if (!subCity && !located) {
    return (
      <div>
        <button onClick={getUserCoordinates}>Locate me</button>
        <input
          type="text"
          className="form-control"
          name="cityName"
          onChange={inputHandler}
          value={cityName}
        />
        <button onClick={clickHandler} className="btn">
          Save
        </button>
      </div>
    );
  }
  console.log(located);
  return (
    <div>
      <Header />
      <Store located={located} lat={lat} long={long} city={subCity}>
        <Details />
      </Store>
    </div>
  );
}

export default App;
