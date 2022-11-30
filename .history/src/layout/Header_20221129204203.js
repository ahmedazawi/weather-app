import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="nav">
      <div>
        <FontAwesomeIcon
          className="f-icon"
          icon={faCloud}
          size="xl"
          color="White"
        />
      </div>

      <h1 style={{ color: "white" }}>Weather</h1>
    </div>
  );
};

export default Header;
