import React from "react";
import { Link } from "react-router-dom";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import { makleri } from "../../data";
import "./teamInfo.scss";

export const TeamInfo = () => {
  return (
    <div className="teamInfoWrapper">
      <img
        className="teamImg"
        src={require("../../media/fototym.jpg")}
        alt=""
      />
      <h1 className="titleHeader">Náš tým RealityGS</h1>

      <div className="teamList">
        {makleri.map((makler) => (
          <div className="maklerBlock">
            <div className="img">
              <Link to={`/makler/${makler.id}`}>
                <img src={makler.foto} alt="" />
              </Link>
            </div>
            <h3>{makler.jmeno}</h3>
            <div className="contactInfo">
              <div className="contactInfoRow">
                <span className="contact">
                  <PhoneCallbackIcon />{" "}
                </span>
                <span className="contactInfoText">{makler.telefon}</span>
              </div>
              <div className="contactInfoRow">
                <span className="contact">
                  <EmailIcon />
                </span>
                <div className="contactInfoText">
                  <span> {makler.mail}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
