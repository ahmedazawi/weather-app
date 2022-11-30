import React, { useContext, useEffect } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";
import Map from "./Map";

const Details = () => {
  const { weather, Loading } = useContext(ContextApi);
  const [weatherValue, setWeatherValue] = weather;
  const [LoadingValue, setLoadingValue] = Loading;
  //   const [LocatedValue, setLocatedValue] = located;
  //   const latValue = lat;
  //   const longValue = long;

  useEffect(() => {
    console.log(weatherValue);
    console.log(LoadingValue);
    // console.log(LocatedValue);
    // console.log(weatherValue.weather[0].main);
  }, [weatherValue]);

  if (LoadingValue) {
    return <div className="main">Loading...</div>;
  }

  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>{weatherValue.location.city}</div>
          <div
            style={{
              fontSize: "60px",
            }}
          >
            {weatherValue.condition.temperature}
            <sup>o</sup>C
          </div>
          <div>{weatherValue.condition.text}</div>
        </div>
        <div>
          <div className="line-a">
            <span>Felt Temp.</span>
            <span>Humidity</span>
            <span>Wind</span>
            <span>Visibility</span>
            <span>Max Temp.</span>
            <span>Min Temp.</span>
          </div>
          <div className="line-b">
            <span>
              {/* {weatherValue.main.feels_like} */}
              <sup>o</sup>C
            </span>
            <span>{weatherValue.atmosphere.humidity}%</span>
            <span> {weatherValue.wind.speed} Km/h</span>
            <span>{weatherValue.atmosphere.visibility} Km</span>
            <span>
              {weatherValue.forecasts[0].low}
              <sup>o</sup>C
            </span>
            <span>
              {weatherValue.forecasts[0].high}
              <sup>o</sup>C
            </span>
          </div>
        </div>
        <div>
          <Map city="Baghdad" />
        </div>
      </div>
    </div>
  );
};

export default Details;
