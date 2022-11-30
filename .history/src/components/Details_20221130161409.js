import React, { useContext, useEffect, useState } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";
import SevenDaysCards from "./SevenDaysCards";
import Map from "./Map";

const Details = () => {
  const { weather, Loading } = useContext(ContextApi);
  const [weatherValue, setWeatherValue] = weather;
  const [LoadingValue, setLoadingValue] = Loading;
  if (LoadingValue) {
    return <div className="main">Loading...</div>;
  }
  const [data, setData] = useState({
    city: weather.location.city,
    temp: weatherValue.current_observation.condition.temperature,
    dayStatus: weatherValue.current_observation.condition.tex,
    feelsTemp: weatherValue.current_observation.condition.temperature - 0.73,
    humidity: weatherValue.current_observation.atmosphere.humidity,
    wind: weatherValue.current_observation.wind.speed,
    visibility: weatherValue.current_observation.atmosphere.visibility,
    maxTemp: weatherValue.forecasts[0].high,
    minTemp: weatherValue.forecasts[0].low,
  });

  // useEffect(() => {
  // console.log(weatherValue);
  // console.log(LoadingValue);
  // console.log(LocatedValue);
  // console.log(weatherValue.weather[0].main);
  // }, [weatherValue]);

  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>{data.city}</div>
          <div
            style={{
              fontSize: "60px",
            }}
          >
            {data.temp}
            <sup>o</sup>C
          </div>
          <div>{data.dayStatus}</div>
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
              {data.feelsTemp}
              <sup>o</sup>C
            </span>
            <span>{data.humidity}%</span>
            <span> {data.wind} Km/h</span>
            <span>{data.visibility} Km</span>
            <span>
              {data.maxTemp}
              <sup>o</sup>C
            </span>
            <span>
              {data.minTemp}
              <sup>o</sup>C
            </span>
          </div>
        </div>
        <div>
          <Map city={data.city} />
        </div>
      </div>

      {/* <SevenDaysCards /> */}
    </div>
  );
};

export default Details;
