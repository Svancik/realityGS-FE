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
          <span>Náš tým</span>
          <span>Nabídka</span>
          <span>Pro investory</span>
          <span>Fotogalerie</span>
          <HashLink className="link" to="/#kontakt">
            <span>Kontakt</span>
          </HashLink>
        </div>
      </div>
    </div>
  );
};
