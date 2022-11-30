import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import { weatherAppAPI } from "./Api";
import axios from "axios";
function Store({ children, located, lat, long }) {
  const [weather, setWeather] = useState([]);
  const [Loading, setLoading] = useState(true);
  const xlat = lat;
  console.log(located);
  useEffect(() => {
    if (located) {
      const options = {
        method: "GET",
        url: weatherAppAPI,
        params: { lat: lat, long: long, format: "json", u: "c" },
        headers: {
          "X-RapidAPI-Key":
            "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
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
    }
  }, [located]);

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
