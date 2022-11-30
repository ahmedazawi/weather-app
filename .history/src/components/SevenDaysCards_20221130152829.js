import React from "react";
import "../assets/css/SevenDaysCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
const SevenDaysCards = () => {
  return (
    <div className="small-cards">
      <div>
        <div>h</div>
        <div>
          <FontAwesomeIcon
            className="f-icon"
            icon={faCloud}
            color="White"
            style={{ marginLeft: "10px", fontSize: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SevenDaysCards;
