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
import { reality as dataReality } from "./../../data";

import "./sidebar.scss";

export const Sidebar = ({ reality, handleSmlouva }) => {
  const okresyRealit = [];
  reality.map((realita) => {
    if (okresyRealit.indexOf(realita.okres) === -1) {
      okresyRealit.push(realita.okres);
    }
  });

  const typyNemovitosti = [];
  reality.map((realita) => {
    if (typyNemovitosti.indexOf(realita.typ) === -1) {
      typyNemovitosti.push(realita.typ);
    }
  });

  okresyRealit.sort();
  typyNemovitosti.sort();

  return (
    <div className="sidebarWrapper">
      <section>
        <span>MÁM ZÁJEM O:</span>
        <div className="filter">
          <input
            type="radio"
            value="pronajem"
            name="smlouva"
            id="pronajem"
            onChange={handleSmlouva}
          />
          <label for="pronajem">
            Pronájem{" "}
            <span>
              ({dataReality.filter((realita) => realita.pronajem).length})
            </span>
          </label>
        </div>
        <div className="filter">
          <input
            type="radio"
            value="prodej"
            name="smlouva"
            id="prodej"
            onChange={handleSmlouva}
          />
          <label for="prodej">
            Prodej{" "}
            <span>
              ({dataReality.filter((realita) => !realita.pronajem).length})
            </span>
          </label>
        </div>
      </section>

      <hr />

      <section>
        <span>ZVOLTE OKRES</span>
        {okresyRealit.map((okres) => (
          <div className="filter locationFilter">
            <input type="radio" value={okres} name="okres" id={okres} />
            <label for={okres}>
              {okres}{" "}
              <span>
                ({reality.filter((realita) => realita.okres === okres).length})
              </span>
            </label>
          </div>
        ))}
      </section>

      <hr />

      <section>
        <span>ZVOLTE TYP NEMOVITOSTI</span>
        {typyNemovitosti.map((typ) => (
          <div className="filter typeFilter">
            <input type="radio" value={typ} name="typ" id={typ} />
            <label for={typ}>
              <div className="row">
                <span className="icon">
                  {typ === "Byt" && <ApartmentIcon className="miniMUI" />}
                  {typ === "Dům" && <HouseIcon className="miniMUI" />}
                  {typ === "Vila" && <VillaIcon className="miniMUI" />}
                  {typ === "Pole" && <TerrainIcon className="miniMUI" />}
                  {typ === "Pozemek" && <TerrainIcon className="miniMUI" />}
                  {typ === "Zahrada" && <YardIcon className="miniMUI" />}
                  {typ === "Restaurace" && (
                    <RestaurantIcon className="miniMUI" />
                  )}
                  {typ === "Zemědělská usedlost" && (
                    <AgricultureIcon className="miniMUI" />
                  )}
                </span>
                {typ}{" "}
                <span>
                  ({reality.filter((realita) => realita.typ === typ).length})
                </span>
              </div>
            </label>
          </div>
        ))}
      </section>
    </div>
  );
};
