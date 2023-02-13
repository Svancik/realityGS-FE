import React from "react";
import { Link } from "react-router-dom";
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
            <th>Dispozice</th>
            <th>Výměra</th>
            <th>Okres</th>
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
              <td className="dispozice">
                <span>{realita.dispozice}</span>
              </td>
              <td className="vymera">
                <span>
                  {realita.vymera}m<sup>2</sup>
                </span>
              </td>
              <td className="kraj">
                <span>{realita.okres}</span>
              </td>
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
