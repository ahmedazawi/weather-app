import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  const [fetched, setfetched] = useState(false);

  useEffect(() => {
    // const config = {
    //   headers: {
    //     "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //     "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
    //   },
    // };

    axios
      .get(
        "https://fcc-weather-api.glitch.me/api/current?lat=44.3&lon=33.3"
        // config
      )
      .then((res) => {
        setWeather(res.data);
        setfetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ContextApi.Provider value={[weather, setWeather]}>
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
