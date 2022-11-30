import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/SevenDaysCards.css";

const card = (props) => {
  return (
    <div id={props.id}>
      <div className="sm-cards-header">{props.data.day}</div>
      <div className="sm-cards-body">
        <div className="sm-cards-temp-max">
          <FontAwesomeIcon className="sun-icon" icon={faSun} />
          <div>
            {props.data.high}
            <sup>o</sup>C
          </div>
        </div>

        <div className="sm-cards-temp-min">
          <FontAwesomeIcon className="moon-icon" icon={faMoon} />

          <div>
            {props.data.low}
            <sup>o</sup>C
          </div>
        </div>

        <div className="sm-cards-text">{props.data.text}</div>
      </div>
    </div>
  );
};

export default card;
