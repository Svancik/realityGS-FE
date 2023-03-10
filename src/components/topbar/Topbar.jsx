import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./topbar.scss";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="left">
          <Link to="/" className="link">
            <div className="linkWrapper">
              <img src={require("../../media/design/logo.png")} alt="" />
              <h3>REALITY GS</h3>
            </div>
          </Link>
        </div>
        <div className="right">
          <HashLink className="link" to="/#aktuality">
            <span>Aktuality</span>
          </HashLink>
          <HashLink className="link" to="/#sluzby">
            <span>Naše služby</span>
          </HashLink>
          <Link to="/tym" className="link">
            <span>Náš tým</span>
          </Link>
          <Link to="/nabidka" className="link">
            <span>Nabídka</span>
          </Link>
          <Link to="/investori" className="link">
            <span>Pro investory</span>
          </Link>
          <Link to="/fotogalerie" className="link">
            <span>Fotogalerie</span>
          </Link>
          <Link className="link" to="/kontakt">
            <span>Kontakt</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
