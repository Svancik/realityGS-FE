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

      {/* <div className="articleBlock">
        <article className="grid grid--1x2 feature">
          <div className="featuredContent">
            <h3>
              Úrokové sazby u hypoték klesají další měsíc. Bude trend
              pokračovat?
            </h3>
            <hr />
            <div className="featureDesc">
              <span>
                Úrokové sazby hypoték dál klesají. Průměrná nabídková sazba
                hypoték podle Fincentrum Hypoindexu za poslední měsíc opět mírně
                klesla o 0,03 procenta bodu a k 3. říjnu 2022 činila 6,20
                procent p. a. Ani druhý pokles sazeb v řadě ovšem změnu trendu
                nepotvrdil. „Některé banky v rámci podzimních kampaní snížily
                hypoteční sazby a tak i Fincentrum Hypoindex zaznamenal drobný
                pokles. Nyní se ustálil na hodnotě 6,20 procenta, což je tři
                bazické body méně proti minulému měsíci.
              </span>
            </div>
            <p>
              <b>Zdroj: </b>
              <Link to="https://www.idnes.cz/finance/hypoteky-a-pujcky/hypoteka-ceny-nemovitosti-hypoindex-urokove-sazby-zari.A221004_085307_pujcky_sov">
                <>
                  {"https://www.idnes.cz/finance/hypoteky-a-pujcky/hypoteka-ceny-nemovitosti-hypoindex-urokove-sazby-zari.A221004_085307_pujcky_sov".substring(
                    0,
                    85
                  )}
                  ...
                </>
              </Link>
            </p>
            <button> ZOBRAZIT ČLÁNEK</button>
          </div>
          <img
            src="https://www.marek-marek.cz/wp-content/uploads/2022/11/3926C2-1.png"
            alt=""
          />
        </article>
      </div>

      <div className="articleBlock">
        <article className="grid grid--1x2 feature">
          <img
            src="https://i.ceskestavby.cz/clanky/odstavce/27782-579886-1-shutterstock-1378621508-1200.jpg"
            className="photoImg"
            alt=""
          />
          <div className="featuredContent">
            <h3>
              Lidé svůj majetek často podceňují. Škody na nemovitosti jim tak
              pojišťovny neproplatí
            </h3>
            <hr />
            <div className="featureDesc">
              <span>
                Stál váš dům před pěti lety pět milionů? Dnes může mít i dvakrát
                vyšší hodnotu. To si ale řada lidí neuvědomuje a ochranu svého
                majetku podceňuje. V případě pojistné události tak ale podle
                staré smlouvy od pojišťoven nezíská dostatek peněz na opravu –
                nahoru totiž šly ceny materiálů, řemeslníků i dopravy.
              </span>
            </div>
            <p>
              <b>Zdroj: </b>
              <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
                <>
                  {"https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/".substring(
                    0,
                    85
                  )}
                  ...
                </>
              </Link>
            </p>
            <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
              <button> ZOBRAZIT ČLÁNEK</button>
            </Link>
          </div>
        </article>
      </div>

      <div className="articleBlock">
        <article className="grid grid--1x2 feature">
          <div className="featuredContent">
            <h3>Kupujete nemovitost? Zajistěte si klidné spaní!</h3>
            <hr />
            <div className="featureDesc">
              <span>
                Našli jste vysněnou nemovitost, chystáte se ji koupit, ale
                bojíte se, aby vše proběhlo bez problémů? Málokdo si je
                uvědomuje, co vše se při nákupu nemovitosti musí zařídit. A
                také, jak snadno se může stát fatální chyba. Případy, kdy
                kupující buď chybou nebo přímo podvodným jednáním přišli nejen o
                vysněnou nemovitost, ale často i o celoživotní úspory, se
                objevují s železnou pravidelností. Všichni si říkáme, že nám se
                taková věc stát prostě nemůže. Ale ruku na srdce, jste si jistí,
                že byste si opravdu dokázali poradit sami?{" "}
              </span>
            </div>
            <p>
              <b>Zdroj: </b>
              <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
                <>
                  {"https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/".substring(
                    0,
                    85
                  )}
                  ...
                </>
              </Link>
            </p>
            <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
              <button> ZOBRAZIT ČLÁNEK</button>
            </Link>
          </div>
          <img
            src="https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000072-4bb284bb2a/IMG_2435-HDR.jpg?ph=8d2b138d04"
            className="photoImg"
            alt=""
          />
        </article>
      </div>

      <div className="articleBlock">
        <article className="grid grid--1x2 feature">
          <img
            src="https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000054-9723197234/IMG_1923-HDR.jpg?ph=8d2b138d04"
            className="photoImg"
            alt=""
          />
          <div className="featuredContent">
            <h3>Správa nájmu bytu</h3>
            <hr />
            <div className="featureDesc">
              <span>
                Jak funguje správa nájmu bytu? Mám si dělat starosti o pronajatý
                byt? co se po vlastníkovi bude chtít? V článku Vám sdělíme
                zejména postup před převzetím bytu do naší správy a zahájení
                správy pronájmu.{" "}
              </span>
            </div>
            <p>
              <b>Zdroj: </b>
              <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
                <>
                  {"https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/".substring(
                    0,
                    85
                  )}
                  ...
                </>
              </Link>
            </p>
            <Link to="https://reality.idnes.cz/sdeleni/lide-svuj-majetek-casto-podcenuji-skody-na-nemovitosti-jim-tak-pojistovny-neproplati/6396e10313e338558f2eb432/">
              <button id="sluzby"> ZOBRAZIT ČLÁNEK</button>
            </Link>
          </div>
        </article>
      </div> */}
    </div>
  );
};
