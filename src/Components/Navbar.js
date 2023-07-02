import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="primaryHeader">
      <div className="Headertitle">
        <h1 className="headerticontrol">Adventurer Alex</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link classname="navlinks" to="/Home">
              <FontAwesomeIcon icon={faHouse} className="fa-xl" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faPerson} className="fa-xl" />
            </Link>
          </li>
          <li>
            <Link classname="navlinks" to="/">
              <FontAwesomeIcon icon={faEarthAmericas} className="fa-xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
