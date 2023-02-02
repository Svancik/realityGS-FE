import React from "react";
import "./news.scss";

export const News = () => {
  return (
    <div className="newsWrapper">
      <div className="newsHeader">
        <h1> AKTUALITY ZE SVĚTA NEMOVITOSTÍ</h1>
        <p>
          Prodej nemovitosti se na první pohled může zdát jako jednoduchý
          proces. Bytů, domů i pozemků je pomálu a proto se úvaha o snadném
          prodeji může logicky nabízet. Za naši desetiletou praxi na realitním
          trhu však víme jaké situace a úskalí při prodeji či pronájmu mohou
          nastat, a proto výběr profesionála s dostatečnou praxí je na místě.
        </p>
      </div>

      <article className="grid grid--1x2 feature">
        <div className="featureContent">
          <h3>
            Úrokové sazby u hypoték klesají další měsíc. Bude trend pokračovat?
          </h3>
          <div className="featureDesc">
            <span>
              Úrokové sazby hypoték dál klesají. Průměrná nabídková sazba
              hypoték podle Fincentrum Hypoindexu za poslední měsíc opět mírně
              klesla o 0,03 procenta bodu a k 3. říjnu 2022 činila 6,20 procent
              p. a. Ani druhý pokles sazeb v řadě ovšem změnu trendu nepotvrdil.
              „Některé banky v rámci podzimních kampaní snížily hypoteční sazby
              a tak i Fincentrum Hypoindex zaznamenal drobný pokles. Nyní se
              ustálil na hodnotě 6,20 procenta, což je tři bazické body méně
              proti minulému měsíci.
            </span>
          </div>
          <p>
            <b>Zdroj: </b>
            https://www.idnes.cz/finance/hypoteky-a-pujcky/hypoteka-ceny-nemovitosti-hypoindex-urokove-sazby-zari.A221004_085307_pujcky_sov
          </p>
          <button> ZOBRAZIT ČLÁNEK</button>
        </div>
        <img
          src="https://www.marek-marek.cz/wp-content/uploads/2022/11/3926C2-1.png"
          alt=""
        />
      </article>
    </div>
  );
};
