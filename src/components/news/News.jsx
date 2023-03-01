import React from "react";
import { Article } from "../article/Article";
import { clanky } from "../../data";
import "./news.scss";

export const News = () => {
  return (
    <div className="newsWrapper">
      <div className="newsHeader">
        <h1 className="titleHeader"> AKTUALITY ZE SVĚTA NEMOVITOSTÍ</h1>
        <p>
          Prodej nemovitosti se na první pohled může zdát jako jednoduchý
          proces. Bytů, domů i pozemků je pomálu a proto se úvaha o snadném
          prodeji může logicky nabízet. Za naši desetiletou praxi na realitním
          trhu však víme jaké situace a úskalí při prodeji či pronájmu mohou
          nastat, a proto výběr profesionála s dostatečnou praxí je na místě.
        </p>
      </div>

      {clanky.map((clanek) => (
        <Article clanek={clanek} />
      ))}
    </div>
  );
};
