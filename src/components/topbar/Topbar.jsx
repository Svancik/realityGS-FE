import React from "react";
import { Link } from "react-router-dom";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbarWrapper">
      <div className="left">
        <img src={require("../../media/design/logo.png")} alt="" />
        <h3>REALITY GS</h3>
      </div>
      <div className="right">
        <span>Úvod</span>
        <span>Naše služby</span>
        <span>Náš tým</span>
        <span>Nabídka</span>
        <span>Pro investory</span>
        <span>Fotogalerie</span>
        <span>Kontakt</span>
      </div>
    </div>
  );
};
