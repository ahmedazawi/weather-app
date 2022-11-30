import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSunPlantWilt } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="nav">
      <div>
        <FontAwesomeIcon
          className="f-icon"
          icon={faSun}
          size="xl"
          color="White"
        />
      </div>

      <div className="">Weather</div>
    </div>
  );
};

export default Header;
