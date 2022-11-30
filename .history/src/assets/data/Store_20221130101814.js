import React, { useState, useEffect } from "react";
import { ContextApi } from "./ContextApi";
import axios from "axios";
function Store({ children }) {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    // const config = {
    //   headers: {
    //     "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //     "x-rapidapi-key": "863b7c6b72msh78facda9cbf0e03p10660djsn19089c27c69a",
    //   },
    // };
    // axios
    //   .get(
    //     "http://api.weatherstack.com/current?access_key=0cc020322dc4a326ce80700688e78e9f&query=Baghdad"
    //     // config
    //   )
    //   .then((res) => {
    //     setWeather(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  return (
    <ContextApi.Provider value={[weather, setWeather]}>
      {children}
    </ContextApi.Provider>
  );
}
export default Store;
