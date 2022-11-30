import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
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

      <h1 className="">Weather</h1>
    </div>
  );
};

export default Header;
