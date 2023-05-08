import React, { useState, useEffect } from "react";
import DATA from "../data";
import Places from "./Countries";

const Adventures = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(7);

  useEffect(() => {
    if (count < target) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000); // wait for 1 second before updating the count
    }
  }, [count, target]);

  return (
    <div className="Primaryadventure">
      <div className="adventuretitle">
        <h2 className="adventurertitle">Adventures</h2>
        <p className="destinations">Countries visited:{count + "+"}</p>
      </div>
      <div className="Adventureplaces">
        {DATA.map((Place, index) => {
          const { img, title } = Place;
          return <Places key={Place.id} {...Place}></Places>;
        })}
      </div>
    </div>
  );
};

export default Adventures;
