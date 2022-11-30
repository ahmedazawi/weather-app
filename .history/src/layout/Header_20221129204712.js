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
          color="White"
          style={{ marginLeft: "10px", fontSize: "40px" }}
        />
      </div>

      <h1 style={{ color: "white", marginLeft: "10px", fontWeight: "900" }}>
        Weather
      </h1>
    </div>
  );
};

export default Header;
