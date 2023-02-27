import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./contactInfo.scss";

export const ContactInfo = () => {
  return (
    <div className="contactInfoWrapper">
      <div className="left">
        {" "}
        <img src="https://d48-a.sdn.cz/d_48/c_img_gS_f/f3Gb9.jpeg" alt="" />
      </div>
      <div className="right">
        <div className="footerRow">
          <LocationOnIcon className="mui" />
          <div className="location">
            <span className="name">Reality GS</span>
            <span>8. května 22/16, 410 02 Lovosice</span>
          </div>
        </div>

        <div className="footerRow">
          <PhoneCallbackIcon />
          <span className="bold">+420 734 899 759</span>
        </div>

        <div className="footerRow">
          <EmailIcon />
          <span className="bold">info@realitygs.cz</span>
        </div>

        <div className="footerRow">
          <FacebookIcon />
          <span className="bold">facebook</span>
        </div>
      </div>
    </div>
  );
};
