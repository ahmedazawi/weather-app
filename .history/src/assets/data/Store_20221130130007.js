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

  // if (located) {
  //   return <div>Loading locating...</div>;
  // }
  useEffect(() => {
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
      setLocated(true);
    };
    getUserCoordinates();

    // const config = {
    //   headers: {
    //     "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //     "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
    //   },
    // };

    axios
      .get(
        weatherAppAPI
        // config
      )
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(lat, long);

  return (
    <ContextApi.Provider
      value={{ weather: [weather, setWeather], Loading: [Loading, setLoading] }}
    >
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
