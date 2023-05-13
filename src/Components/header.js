import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(7);

  useEffect(() => {
    if (count < target) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count, target]);

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
          <li>
            <FontAwesomeIcon icon={faEarthAmericas} className="fa-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
