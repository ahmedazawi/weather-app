import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import { weatherAppAPI } from "./Api";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [located, setLocated] = useState(false);
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
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };
  getUserCoordinates();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: { lat: lat, long: long, format: "json", u: "c" },
      headers: {
        "X-RapidAPI-Key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setWeather(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <ContextApi.Provider
      value={{
        weather: [weather, setWeather],
        Loading: [Loading, setLoading],
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
