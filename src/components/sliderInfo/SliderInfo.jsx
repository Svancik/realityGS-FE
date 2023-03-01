import React from "react";
import { Link } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import "./sliderInfo.scss";
import { makleri } from "../../data";

export const SliderInfo = ({ realita }) => {
  const makler = makleri.find((makler) => makler.id === realita.maklerId);

  return (
    <div className="sliderInfoWrapper">
      <div className="top">
        <div className="left">
          <div className="title sliderBlock">
            <HouseIcon className="mui" /> <h2>{realita.typ}</h2>
            <span>(dispozice: {realita.dispozice})</span>
          </div>
          <div className="location sliderBlock">
            <LocationOnIcon className="mui" />
            <span>{realita.lokalita}</span>
            <span>|</span>
            <span>{realita.okres}</span>
            <span>|</span>
            <span>{realita.kraj}</span>
          </div>
          <div className="detailInfo sliderBlock">
            <SquareFootIcon className="mui" />
            <span className="dimension">
              Výměra nemovitosti: {realita.vymera} m<sup>2</sup>
            </span>
            {realita.pozemek && (
              <>
                <span>|</span>
                <span className="dimension">
                  Výměra pozemku: {realita.pozemek} m<sup>2</sup>
                </span>
              </>
            )}
          </div>
          <div className="sliderBlock price">
            <AttachMoneyIcon className="mui" />
            <h4>Cena: {realita.cena}</h4>
          </div>

          <div className="description sliderBlock">
            <DescriptionIcon className="mui" />
            <span>{realita.popis.substring(0, 400)}</span>
          </div>
          <Link to={realita.link}>
            <button className="inzerat"> ZOBRAZIT INZERÁT</button>
          </Link>
        </div>
        <div className="right">
          <div className="img">
            <Link to="/makler/1">
              <img src={makler.foto} alt="" />
            </Link>
          </div>
          <h3>{makler.jmeno}</h3>
          <div className="contactInfo">
            <div className="contactInfoRow">
              <span className="contact">
                <PhoneCallbackIcon  />{" "}
              </span>
              <span className="contactInfoText">{makler.telefon}</span>
            </div>
            <div className="contactInfoRow">
              <span className="contact">
                <EmailIcon  />
              </span>
              <div className="contactInfoText">
                <span> {makler.mail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
