import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // const config = {
    //   headers: {
    //     "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //     "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
    //   },
    // };

    axios
      .get(
        "https://fcc-weather-api.glitch.me/api/current?lat=33.3152&lon=44.3661"
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
  return (
    <ContextApi.Provider
      value={{ weather: [weather, setWeather], Loading: [Loading, setLoading] }}
    >
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
