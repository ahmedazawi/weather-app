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
          setLocated(true);
        },
        (error) => {
          console.log("Something went wrong getting your position!");
        }
      );
    }
  };
  getUserCoordinates();
  useEffect(() => {
    // const config = {
    //   headers: {
    //     "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //     "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
    //   },
    // };

    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: { location: "sunnyvale", format: "json", u: "f" },
      headers: {
        "X-RapidAPI-Key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
        "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
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
        located: [located, setLocated],
        lat: [lat, setLat],
        long: [long, setLong],
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
