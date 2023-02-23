import React from "react";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VillaIcon from "@mui/icons-material/Villa";
import TerrainIcon from "@mui/icons-material/Terrain";
import YardIcon from "@mui/icons-material/Yard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import "./offerItem.scss";
import { Link } from "react-router-dom";
import { makleri } from "../../data";

export const OfferItem = ({ realita }) => {
  const maklerReality = makleri.filter(
    (makler) => makler.id.toString() === realita.maklerId.toString()
  )[0];

  return (
    <div className="offerItemWrapper">
      <div className="coverImg">
        <img src={realita.foto[0]} alt="" />
      </div>

      <div className="typeOfSell">
        {realita.pronajem ? "PRONÁJEM" : "PRODEJ"}
      </div>

      <Link to={`/makler/${maklerReality.id}`}>
        <div className="offerItemMakler">
          <img src={maklerReality.foto} alt="" />
        </div>
      </Link>

      <div className="offerItemInfo">
        <div className="top">
          <div className="offerItemInfoRow">
            {realita.typ === "Byt" && <ApartmentIcon className="mui" />}
            {realita.typ === "Dům" && <HouseIcon className="mui" />}
            {realita.typ === "Vila" && <VillaIcon className="mui" />}
            {realita.typ === "Pole" && <TerrainIcon className="mui" />}
            {realita.typ === "Pozemek" && <TerrainIcon className="mui" />}
            {realita.typ === "Zahrada" && <YardIcon className="mui" />}
            {realita.typ === "Restaurace" && <RestaurantIcon className="mui" />}
            {realita.typ === "Zemědělská usedlost" && (
              <AgricultureIcon className="mui" />
            )}

            <span className="dimensions">
              {realita.dispozice} ({realita.vymera}m<sup>2</sup>
              {realita.pozemek && (
                <span>
                  {" "}
                  + {realita.pozemek}m<sup>2</sup>
                </span>
              )}
              )
            </span>
          </div>

          <div className="offerItemInfoRow">
            <LocationOnIcon className="mui" />
            <span className="location">
              <span>{realita.lokalita}</span>
            </span>
          </div>

          <div className="offerItemInfoRow">
            <AttachMoneyIcon className="mui" />
            <span className="money">
              {realita.cena ? realita.cena + " Kč" : "Info o ceně u RK"}
              {realita.pronajem ? " / měsíc" : ""}
            </span>
          </div>
        </div>
        <div className="bottom">
          <Link to={realita.link}>
            <button className="inzerat">ZOBRAZIT INZERÁT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
