import React, { useContext, useEffect } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";

const Details = () => {
  const { weather, fetched } = useContext(ContextApi);
  const [weatherValue, setWeatherValue] = weather;
  const [fetchedValue, setFetchedValue] = fetched;

  useEffect(() => {
    console.log(weatherValue);
    console.log(fetchedValue);
    // console.log(weatherValue.weather[0].main);
  }, [weatherValue]);

  if (fetched === true) {
    return <div className="main">Loading...</div>;
  }

  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>{weatherValue.weather[0].main}</div>
          <div
            style={{
              fontSize: "90px",
            }}
          >
            22<sup>o</sup>C
          </div>
          <div>clouds</div>
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
            <span>Felt Temp.</span>
            <span>Humidity</span>
            <span>Wind</span>
            <span>Visibility</span>
            <span>Max Temp.</span>
            <span>Min Temp.</span>
          </div>
        </div>
        <div>b</div>
      </div>
    </div>
  );
};

export default Details;
