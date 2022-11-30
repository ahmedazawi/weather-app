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
          style={{ marginLeft: "10px", textShadow: " 2px 2px 4px black" }}
        />
      </div>

      <h1
        style={{
          color: "white",
          marginLeft: "10px",
          textShadow: " 2px 2px 4px black",
        }}
      >
        Weather
      </h1>
    </div>
  );
};

export default Header;
