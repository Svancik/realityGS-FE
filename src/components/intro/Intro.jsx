import React from "react";
import "./intro.scss";

export const Intro = () => {
  return (
    <div className="introWrapper">
      {" "}
      <h1 className="titleHeader">NAŠE SLUŽBY</h1>
      <img src={require("../../media/sluzby.png")} alt="" />
    </div>
  );
};
