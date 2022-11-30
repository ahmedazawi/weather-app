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

  const cityNameHandler = (event) => {
    event.preventDefault();
    setCityName(document.querySelector("#cityName").event.target.value);
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
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

  if (!located) {
    return (
      <div className="App">
        <input id="cityName" onChange={handleChange} value={cityName}></input>
        <button type="submit" onClick={cityNameHandler}>
          Enter
        </button>
        <button onClick={getUserCoordinates()}>Locate me</button>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Store lat={lat} long={long} located={located} city={cityName}>
        <Details />
      </Store>
    </>
  );
}

export default App;
