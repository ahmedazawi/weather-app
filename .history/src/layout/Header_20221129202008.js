import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <div className="nav">
      <FontAwesomeIcon className="f-icon" icon={faFacebook} size="lg" />
    </div>
  );
};

export default Header;
