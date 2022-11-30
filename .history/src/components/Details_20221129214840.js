import React from "react";
import "../assets/css/details.css";
const Details = () => {
  return (
    <div className="main">
      <div className="big-cards">
        <div>
          <div>Baghdad</div>
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
          </div>
          <div className="line-b">
            <span>Felt Temp.</span>
            <span>Humidity</span>
          </div>
        </div>
        <div>b</div>
      </div>
    </div>
  );
};

export default Details;
