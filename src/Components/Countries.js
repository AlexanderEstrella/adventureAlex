import React from "react";
const Places = (props) => {
  const { img, title } = props;
  return (
    <div className="adventures">
      <img className="adventureimgcontrl" src={img} alt="" />
      <h3>{title} </h3>
    </div>
  );
};

export default Places;
