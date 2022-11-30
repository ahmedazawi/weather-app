import React from "react";
import "../assets/css/SevenDaysCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
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
              color="black"
              style={{ marginLeft: "10px", fontSize: "40px" }}
            />
          </div>
          <div className="sm-cards-temp-min"></div>
        </div>
      </div>
    </div>
  );
};

export default SevenDaysCards;
<FontAwesomeIcon
  className="f-icon"
  icon={faSun}
  color="black"
  style={{ marginLeft: "10px", fontSize: "40px" }}
/>;
