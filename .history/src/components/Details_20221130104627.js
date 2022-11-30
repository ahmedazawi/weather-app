import React, { useContext, useEffect } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";

const Details = () => {
  const [data, fetched] = useContext(ContextApi);
  const [dataValue, setDataValue] = data;
  const [fetchedValue, setFetchedValue] = fetched;
  useEffect(() => {
    console.log(dataValue);
    // console.log(data.weather[0].main);
  }, [dataValue]);

  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>
            {/* {data.name} */}
            Baghdad
          </div>
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
