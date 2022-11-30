import React from "react";
import "../assets/css/SevenDaysCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const SevenDaysCards = (props) => {
  return (
    <div className="small-cards">
      {props.data.map((e) => {
        return (
          <div id={e.id}>
            <div className="sm-cards-header">{e.day}</div>
            <div className="sm-cards-body">
              <div className="sm-cards-temp-max">
                <FontAwesomeIcon
                  className="sun-icon"
                  icon={faSun}
                  style={{ fontSize: "25px" }}
                />
                <div style={{ fontSize: "25px" }}>
                  {e.high}
                  <sup>o</sup>C
                </div>
              </div>

              <div className="sm-cards-temp-min">
                <FontAwesomeIcon
                  className="moon-icon"
                  icon={faMoon}
                  style={{ fontSize: "25px" }}
                />

                <div style={{ fontSize: "25px" }}>
                  {e.low}
                  <sup>o</sup>C
                </div>
              </div>

              <div style={{ fontWeight: "600" }}>{e.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SevenDaysCards;
