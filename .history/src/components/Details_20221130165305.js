import React, { useContext, useEffect, useState } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";
import SevenDaysCards from "./SevenDaysCards";
import Map from "./Map";

const Details = () => {
  const { weather, Loading } = useContext(ContextApi);
  const [weatherValue, setWeatherValue] = weather;
  const [weValue, setWeValue] = useState(...weather, {});

  const [LoadingValue, setLoadingValue] = Loading;

  // useEffect(() => {
  // console.log(weatherValue);
  // console.log(LoadingValue);
  // console.log(LocatedValue);
  // console.log(weatherValue.weather[0].main);
  // }, [weatherValue]);

  if (LoadingValue) {
    return <div className="main">Loading...</div>;
  }
  console.log(weValue);
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
            {weatherValue.current_observation.condition.temperature}
            <sup>o</sup>C
          </div>
          <div>{weatherValue.current_observation.condition.text}</div>
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
              {weatherValue.current_observation.condition.temperature - 0.7}
              <sup>o</sup>C
            </span>
            <span>{weatherValue.current_observation.atmosphere.humidity}%</span>
            <span> {weatherValue.current_observation.wind.speed} Km/h</span>
            <span>
              {weatherValue.current_observation.atmosphere.visibility} Km
            </span>
            <span>
              {weatherValue.forecasts[0].high}
              <sup>o</sup>C
            </span>
            <span>
              {weatherValue.forecasts[0].low}
              <sup>o</sup>C
            </span>
          </div>
        </div>
        <div>
          <Map city={weatherValue.location.city} />
        </div>
      </div>

      <SevenDaysCards />
    </div>
  );
};

export default Details;
