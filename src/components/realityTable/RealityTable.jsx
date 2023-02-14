import React from "react";
import { Link } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HouseIcon from "@mui/icons-material/House";
import VillaIcon from "@mui/icons-material/Villa";
import TerrainIcon from "@mui/icons-material/Terrain";
import YardIcon from "@mui/icons-material/Yard";
import "./realityTable.scss";
import { reality } from "./../../data";

export const RealityTable = ({ maklerId }) => {
  const maklereReality = reality.filter(
    (realita) => realita.maklerId.toString() === maklerId.toString()
  );
  console.log(maklereReality);

  return (
    <div className="realityTableWrapper">
      <table className="realityTable">
        <thead>
          <tr>
            <th>Fotografie</th>
            <th>Typ</th>
            <th>Dispozice</th>
            <th>Výměra</th>
            {/* <th>Okres</th> */}
            <th>Lokalita</th>
            <th>Cena</th>
            <th>Inzerát</th>
          </tr>
        </thead>
        <tbody>
          {maklereReality.map((realita) => (
            <tr key={realita.cena}>
              <Link to={realita.link}>
                <td className="foto">
                  <img src={realita.foto[0]} alt="" />
                  <img src={realita.foto[1]} alt="" />
                  <img src={realita.foto[2]} alt="" />
                </td>
              </Link>
              <td className="typ">
                <div>
                  {realita.typ === "Byt" && <ApartmentIcon className="mui" />}
                  {realita.typ === "Dům" && <HouseIcon className="mui" />}
                  {realita.typ === "Vila" && <VillaIcon className="mui" />}
                  {realita.typ === "Pole" && <TerrainIcon className="mui" />}
                  {realita.typ === "Pozemek" && <TerrainIcon className="mui" />}
                  {realita.typ === "Zahrada" && <YardIcon className="mui" />}
                </div>
              </td>
              <td className="dispozice">
                <span>{realita.dispozice}</span>
              </td>
              <td className="vymera">
                <span>
                  {realita.vymera}m<sup>2 </sup>
                  {realita.pozemek && (
                    <span>
                      + {realita.pozemek}m<sup>2</sup>
                    </span>
                  )}
                </span>
              </td>
              {/* <td className="kraj">
                <span>{realita.okres}</span>
              </td> */}
              <td className="lokalita">
                <span>{realita.lokalita}</span>
              </td>
              <td className="cena">
                <span>
                  {realita.cena ? realita.cena + " Kč" : "Info o ceně u RK"}
                  {realita.pronajem ? " / měsíc" : ""}
                </span>
              </td>
              <td className="inzerat">
                <Link to={realita.link}>
                  <button className="inzerat">ZOBRAZIT INZERÁT</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
