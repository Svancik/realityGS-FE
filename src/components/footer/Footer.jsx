import React from "react";
import "./footer.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerRow">
        <LocationOnIcon />
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
  );
};
