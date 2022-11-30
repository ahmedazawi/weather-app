import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Details from "./components/Details";

import Store from "./assets/data/Store";
function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState(false);

  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          setError("Something went wrong getting your position!");
        }
      );
    }
  };
  getUserCoordinates();
  useEffect(() => {
    // getUserCoordinates();
    console.log(lat, long);
  }, []);
  return (
    <div className="App">
      <Header />
      <Store>
        <Details />
      </Store>
    </div>
  );
}

export default App;
