import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleScreen = () => {
    setMobile(!mobile);
  }

  return (
    <div className="primaryHeader">
      <div className="Headertitle">
        <h1 className="Logo">Adventurer Alex's</h1>
      </div>
      <div className="nav">
        <ul className="navLinks">
          <li>
            <Link to="/Home">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link to="/Adventures">
              <h3>Adventures</h3>
            </Link>
          </li>
        </ul>
        <span className="FaBars" onClick={toggleScreen}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <ul className="Dropdownmenu" style={{ display: mobile ? "block" : "none" }}>
          <li>
            <Link to="/Home">
              <h3>Home</h3>
            </Link>
          </li>
          <li>
            <Link to="/About">
              <h3>About Us</h3>
            </Link>
          </li>
          <li>
            <Link to="/Adventures">
              <h3>Adventures</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
