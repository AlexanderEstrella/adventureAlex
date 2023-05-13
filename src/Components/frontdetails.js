import React, { useState, useEffect } from "react";

const Frontdetails = () => {
  const [continents, setContinents] = useState(0);
  const [target, setTarget] = useState(2);
  const [indigenous, setIndigenous] = useState(0);
  const [target1, setTarget1] = useState(2);
  const [countries, setCountries] = useState(0);
  const [target2, setTarget2] = useState(7);

  useEffect(() => {
    if (countries < target2) {
      setTimeout(() => {
        setCountries(countries + 1);
      }, 1000);
    }
  }, [countries, target2]);

  useEffect(() => {
    if (indigenous < target1) {
      setTimeout(() => {
        setIndigenous(indigenous + 1);
      }, 1000);
    }
  }, [indigenous, target1]);
  useEffect(() => {
    if (continents < target) {
      setTimeout(() => {
        setContinents(continents + 1);
      }, 1000);
    }
  }, [continents, target]);

  return (
    <div className="details-container">
      <div>
        <span>{continents + "+"}</span>
        <h2>Continents</h2>
      </div>
      <div>
        <span>{indigenous + "+"}</span>
        <h2>Indigenous groups</h2>
      </div>
      <div>
        <span>{countries + "+"}</span>
        <h2>Countries</h2>
      </div>
    </div>
  );
};
export default Frontdetails;
