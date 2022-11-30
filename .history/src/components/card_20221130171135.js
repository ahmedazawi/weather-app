import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/SevenDaysCards.css";

const card = (props) => {
  return (
    <div id={props.id}>
      <div className="sm-cards-header">{props.day}</div>
      <div className="sm-cards-body">
        <div className="sm-cards-temp-max">
          <FontAwesomeIcon
            className="sun-icon"
            icon={faSun}
            style={{ fontSize: "25px" }}
          />
          <div style={{ fontSize: "25px" }}>
            {props.high}
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
            {props.low}
            <sup>o</sup>C
          </div>
        </div>

        <div style={{ fontWeight: "600" }}>{props.text}</div>
      </div>
    </div>
  );
};

export default card;
