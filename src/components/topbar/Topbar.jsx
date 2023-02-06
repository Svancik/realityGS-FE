import React from "react";
import { HashLink } from "react-router-hash-link";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="left">
          <img src={require("../../media/design/logo.png")} alt="" />
          <h3>REALITY GS</h3>
        </div>
        <div className="right">
          <HashLink to="#aktuality">
            <span>Aktuality</span>
          </HashLink>
          <span>Naše služby</span>
          <span>Náš tým</span>
          <span>Nabídka</span>
          <span>Pro investory</span>
          <span>Fotogalerie</span>
          <HashLink to="#kontakt">
            <span>Kontakt</span>
          </HashLink>
        </div>
      </div>
    </div>
  );
};
