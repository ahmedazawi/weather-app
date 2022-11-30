import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=44.3&lat=33.3"
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
