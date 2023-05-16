import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Adventures from "../Pages/adventures";
import About from "../Pages/about.";

const Navbar = () => {
  return (
    <BrowserRouter>
      <div className="primaryHeader">
        <div className="Headertitle">
          <h1 className="headerticontrol">Adventurer Alex</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faHouse} className="fa-xl" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faPerson} className="fa-xl" />
              </Link>
            </li>
            <li>
              <Link to="/adventures">
                <FontAwesomeIcon icon={faEarthAmericas} className="fa-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="adventures" component={Adventures}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
