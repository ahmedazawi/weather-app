import React from "react";
import "../assets/css/SevenDaysCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const SevenDaysCards = () => {
  return (
    <div className="small-cards">
      <div>
        <div className="sm-cards-header">h</div>
        <div className="sm-cards-body">
          <div className="sm-cards-temp-max">
            <FontAwesomeIcon
              className="sun-icon"
              icon={faSun}
              style={{ fontSize: "25px" }}
            />
            <div style={{ fontSize: "25px" }}>
              22<sup>o</sup>C
            </div>
          </div>

          <div className="sm-cards-temp-min">
            <FontAwesomeIcon
              className="moon-icon"
              icon={faMoon}
              style={{ fontSize: "25px" }}
            />

            <div style={{ fontSize: "25px" }}>
              22<sup>o</sup>C
            </div>
          </div>

          <div>Clouds</div>
        </div>
      </div>
    </div>
  );
};

export default SevenDaysCards;
