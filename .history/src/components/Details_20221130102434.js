import React, { useContext, useEffect } from "react";
import "../assets/css/details.css";
import { ContextApi } from "../assets/data/ContextApi";

const Details = () => {
  const [data, setData] = useContext(ContextApi);

  //   if (data) {
  //     console.log("data exist");
  //   } else {
  //     console.log("data not exist");
  //   }
  useEffect(() => {
    console.log(data);
    // console.log(data.location.name);
  }, [data]);

  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>{data.title}</div>
          <div
            style={{
              fontSize: "90px",
            }}
          >
            22<sup>o</sup>C
          </div>
          <div>Clouds</div>
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
