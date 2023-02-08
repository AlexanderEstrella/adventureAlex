import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="primaryHeader">
      <div className="Headertitle">
        <h1 className="headerticontrol">Adventurer Alex</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} className="fa-xl" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPerson} className="fa-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
