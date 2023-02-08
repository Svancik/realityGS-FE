import React from "react";

import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import "./agent.scss";

export const Agent = () => {
  return (
    <>
      <div className="agentWrapper">
        <div className="agentDesc">
          <div className="agentInfo">
            <h1 className="titleHeader">Jakub Žák</h1>
            <img
              src="https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000162-c7adbc7ade/Sn%C3%ADmek%20obrazovky%202022-11-30%20v%C2%A012.04.23.webp?ph=8d2b138d04"
              alt=""
            />
            <p>certifikovaný makléř</p>

            <div className="contactInfo">
              <div className="contactInfoRow">
                <span className="contact">
                  <PhoneCallbackIcon />{" "}
                </span>
                <div className="contactInfoText">
                  <span>720 978 703</span>
                </div>
              </div>
              <div className="contactInfoRow">
                <span className="contact">
                  <EmailIcon />
                </span>
                <div className="contactInfoText">
                  <span> jakub.zak@realitygs.cz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
