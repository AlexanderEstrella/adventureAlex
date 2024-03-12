import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="primaryHeader">
      <div className="Headertitle">
        <h1 className="Logo">Adventurer Alex's</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link classname="navlinks" to="/Home">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/About">
            <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link classname="navlinks" to="/Adventures">
            <h3>Adventures</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger-icon">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Navbar;
