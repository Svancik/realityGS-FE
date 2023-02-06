import React from "react";
import { Link } from "react-router-dom";
import HouseIcon from "@mui/icons-material/House";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import "./sliderInfo.scss";

// {
//     typ: "Rodinný dům",
//     lokalita: "Podbořany - Letov",
//     okres: "Louny",
//     kraj: "Ústecký kraj",
//     vymera: "109",
//     dispozice: "3+1",
//     pozemek: "416",
//     cena: "3 090 000",
//     popis: `Hledáte rodinný dům se zahrádkou na venkově za rozumnou cenu? Tak právě pro Vás máme nově v nabídce tento patrový, podsklepený dům 3+1 v obci Podbořany, okres Louny. Dům prošel před nedávnem částečnou rekonstrukcí- má nově udělanou střechu, fasádu a zateplené první patro a půdu. V přízemí naleznete vstupní chodbu, prosklenou terasu, prostorný obývací pokoj s krbovými kamny, kuchyni s prostorem na jídelní stůl a koupelnu s velkou vanou a WC. V prvním patře jsou dva pokoje a samostatné WC. Zahrádka o výměře 300m2 Vám nabízí pergolu s posezením, udírnu, přístřešek na auto, dílnu a záhonek. V domě je zavedena elektřina 230V a 380V, pitná voda z řádu, septik a vytápění na tuhá paliva. O ceně je možné jednat. Dům je nutno vidět na vlastní oči, proto mě neváhejte kontaktovat a domluvíme si nezávaznou prohlídku. V případě zájmu o financování jsme Vám schopni zajistit nejvýhodnější nabídku na trhu.`,
//   },

/*TODO: SliderInfo rozdělit na:
    - left (hotov níže)
    - right (dát foto makléře a kontakt na něj + proklik na jeho stránku)
    - bottom (dát popis nemovitosti s pár řádky)


*/
export const SliderInfo = ({ reality }) => {
  return (
    <div className="sliderInfoWrapper">
      <div className="top">
        <div className="left">
          <div className="title sliderBlock">
            <HouseIcon className="mui" /> <h2>{reality.typ}</h2>
            <span>(dispozice: {reality.dispozice})</span>
          </div>
          <div className="location sliderBlock">
            <LocationOnIcon className="mui" />
            <span>{reality.lokalita}</span>
            <span>|</span>
            <span>{reality.okres}</span>
            <span>|</span>
            <span>{reality.kraj}</span>
          </div>
          <div className="detailInfo sliderBlock">
            <SquareFootIcon className="mui" />
            <span className="dimension">
              Výměra nemovitosti: {reality.vymera} m<sup>2</sup>
            </span>
            {reality.pozemek && (
              <>
                <span>|</span>
                <span className="dimension">
                  Výměra pozemku: {reality.pozemek} m<sup>2</sup>
                </span>
              </>
            )}
          </div>
          <div className="sliderBlock price">
            <AttachMoneyIcon className="mui" />
            <h4>Cena: {reality.cena}</h4>
          </div>

          <div className="description sliderBlock">
            <DescriptionIcon className="mui" />
            <span>{reality.popis.substring(0, 400)}</span>
          </div>
          <Link to={reality.link}>
            <button> ZOBRAZIT INZERÁT</button>
          </Link>
        </div>
        <div className="right">
          <div className="img">
            <img src={reality.maklerFoto} alt="" />
          </div>
          <h3>{reality.maklerJmeno}</h3>
          <div className="contactInfo">
            <div className="contactInfoRow">
              <span className="contact">Telefon: </span>
              <span>{reality.maklerTel}</span>
            </div>
            <div className="contactInfoRow">
              <span className="contact">E-mail: </span>
              <span> {reality.maklerMail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
