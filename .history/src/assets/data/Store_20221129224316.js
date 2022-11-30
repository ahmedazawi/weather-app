import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
        "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
      },
    };

    axios
      .get(
        "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=44.3&lat=33.3",
        config
      )
      .then((res) => {
        setWeather(res.data);
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
