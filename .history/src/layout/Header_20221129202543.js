import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="nav">
      <FontAwesomeIcon className="f-icon" icon={faSun} size="lg" />
    </div>
  );
};

export default Header;
