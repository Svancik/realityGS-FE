import React from "react";
import { makleri } from "../../data";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import "./agent.scss";
//(realita) => realita.maklerId.toString() === maklerId.toString();
export const Agent = ({ maklerId }) => {
  const makler = makleri.filter(
    (m) => m.id.toString() === maklerId.toString()
  )[0];
  console.log(makler);
  return (
    <>
      <div className="agentWrapper">
        <div className="agentDesc">
          <div className="agentInfo">
            <h1 className="titleHeader">{makler.jmeno}</h1>
            <img src={makler.foto} alt="" />
            <p>certifikovaný makléř</p>

            <div className="contactInfo">
              <div className="contactInfoRow">
                <span className="contact">
                  <PhoneCallbackIcon />{" "}
                </span>
                <div className="contactInfoText">
                  <span>{makler.telefon}</span>
                </div>
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
        </div>
      </div>
    </>
  );
};
