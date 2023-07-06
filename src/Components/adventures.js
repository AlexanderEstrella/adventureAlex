import DATA from "../dataimg";
import Countries from "./Countries";
import React from "react";
const Adventures = () => {
  return (
    <div className="Primaryadventure">
      <div className="adventuretitle">
        <h2 className="adventurertitle">Adventures</h2>
      </div>
      <div className="Adventureplaces">
        {DATA.map((Place, index) => {
          const { img, title } = Place;
          return <Countries key={Place.id} {...Place}></Countries>;
        })}
      </div>
    </div>
  );
};

export default Adventures;
