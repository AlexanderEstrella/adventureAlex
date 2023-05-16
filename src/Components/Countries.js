import React from "react";

const Countries = (props) => {
  const { img, title } = props;
  return (
    <div className="adventures">
      <img className="adventureimgcontrl" src={img} alt="" />
      <h3>{title} </h3>
    </div>
  );
};

export default Countries;
