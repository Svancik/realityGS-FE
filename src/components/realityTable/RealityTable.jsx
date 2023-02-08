import React from "react";
import { Link } from "react-router-dom";
import "./realityTable.scss";

const reality = [
  {
    typ: "Rodinný dům",
    foto: [
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/IMG_1276.jpg?alt=media&token=746d5936-5640-460b-a66e-564e949907f2",
      "https://d18-a.sdn.cz/d_18/c_img_QQ_LX/njdv8z.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QQ_LX/4Czv82.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Podbořany - Letov",
    okres: "Louny",
    kraj: "Ústecký kraj",
    vymera: "109",
    dispozice: "3+1",
    pozemek: "416",
    cena: "2 890 000",
    maklerFoto:
      "https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000162-c7adbc7ade/Sn%C3%ADmek%20obrazovky%202022-11-30%20v%C2%A012.04.23.webp?ph=8d2b138d04",
    maklerTel: "720 978 703",
    maklerMail: "jakub.zak@realitygs.cz",
    maklerJmeno: "Jakub Žák",
    popis: `Hledáte rodinný dům se zahrádkou na venkově za rozumnou cenu? Tak právě pro Vás máme nově v nabídce tento patrový, podsklepený dům 3+1 v obci Podbořany, okres Louny. Dům prošel před nedávnem částečnou rekonstrukcí- má nově udělanou střechu, fasádu a zateplené první patro a půdu. V přízemí naleznete vstupní chodbu, prosklenou terasu, prostorný obývací pokoj s krbovými kamny, kuchyni s prostorem na jídelní stůl a koupelnu s velkou vanou a WC. V prvním patře jsou dva pokoje a samostatné WC. Zahrádka o výměře 300m2 Vám nabízí pergolu s posezením, udírnu, přístřešek na auto, dílnu a záhonek. V domě je zavedena elektřina 230V a 380V, pitná voda z řádu, septik a vytápění na tuhá paliva. O ceně je možné jednat. Dům je nutno vidět na vlastní oči, proto mě neváhejte kontaktovat a domluvíme si nezávaznou prohlídku. V případě zájmu o financování jsme Vám schopni zajistit nejvýhodnější nabídku na trhu.`,
    link: "https://www.sreality.cz/detail/prodej/dum/rodinny/podborany-letov-/1320395852",
  },
  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_gY_q/XyXBX8U.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gT_s/AAXBX9j.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gR_s/xWIUAp.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Litoměřice - Předměstí",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "60",
    dispozice: "2+1",
    cena: "4 600 000",
    maklerFoto:
      "https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000162-c7adbc7ade/Sn%C3%ADmek%20obrazovky%202022-11-30%20v%C2%A012.04.23.webp?ph=8d2b138d04",
    maklerTel: "720 978 703",
    maklerMail: "jakub.zak@realitygs.cz",
    maklerJmeno: "Jakub Žák",
    popis: ` zastoupení majitele Vám nabízíme k prodeji krásný byt 2+1 s obytnou plochou 60m2 v předměstí Litoměřic, v ulici Rooseveltova. Byt se nachází v prvním podlaží cihlového domu, v klidné ulici s pěší dostupností do centra města, MHD, obchodů, restaurací a městského parku. Skládá se z předsíně, prostorného obývacího pokoje, útulné ložnice, krásně zařízené koupelny s WC a veliké kuchyně. Nedávná rekonstrukce dodala bytu příjemný, moderní vzhled. V celém bytě jsou plastová okna s trojsklem, plovoucí podlaha, v kuchyni linoleum a zařízená kuchyňská linka. K bytu také náleží společná zahrada, společný sklepní a půdní prostor, který je volně k užívání. Litoměřice jsou královské město, které nabízí veškerou občanskou vybavenost, pořádá spoustu kulturních událostí a na dálnici jste za 5 minut. V případě zájmu o prohlídku mě prosím kontaktujte na uvedeném telefonním čísle.`,
    link: "https://www.sreality.cz/detail/prodej/byt/2+1/litomerice-predmesti-rooseveltova/109290572",
  },
  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QR_L5/3HoB7A0.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gV_s/MvJB9gW.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QM_KW/3iWJ2N.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Albrechtická, Most",
    okres: "Most",
    kraj: "Ústecký kraj",
    vymera: "69",
    dispozice: "3+1",
    cena: "1 199 000",
    maklerFoto:
      "https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000162-c7adbc7ade/Sn%C3%ADmek%20obrazovky%202022-11-30%20v%C2%A012.04.23.webp?ph=8d2b138d04",
    maklerTel: "720 978 703",
    maklerMail: "jakub.zak@realitygs.cz",
    maklerJmeno: "Jakub Žák",
    popis: `Nabízíme vám k prodeji družstevní byt 3+1, 69m2 s lodžií v městské části Most. Byt se nachází v druhém podlaží panelového domu s výtahem a parkováním přímo před domem. Byt je dispozičně řešen třemi pokoji, kuchyní , WC a koupelnou. K bytu také náleží sklepní koje. V celém bytě jsou nová plastová okna a panelový dům je zateplený. V okolí bytu naleznete veškerou občanskou vybavenost jako jsou obchodní střediska, supermarkety, restaurace a další. Pokud máte zájem o prohlídku, kontaktujte mě na uvedeném telefonním čísle. Financování nemovitosti pro Vás zajistíme.`,
    link: "https://www.sreality.cz/detail/prodej/byt/3+1/most-most-albrechticka/3803825228#img=0&fullscreen=false",
  },
];

export const RealityTable = () => {
  return (
    <div className="realityTableWrapper">
      <table className="realityTable">
        <thead>
          <tr>
            <th>Fotografie</th>
            <th>Dispozice</th>
            <th>Vymera</th>
            <th>Okres</th>
            <th>Lokalita</th>
            <th>Cena</th>
            <th>Inzerát</th>
          </tr>
        </thead>
        <tbody>
          {reality.map((realita) => (
            <tr>
              <td className="foto">
                <img src={realita.foto[0]} alt="" />
                <img src={realita.foto[1]} alt="" />
                <img src={realita.foto[2]} alt="" />
              </td>
              <td className="dispozice">
                <span>{realita.dispozice}</span>
              </td>
              <td className="vymera">
                <span>
                  {realita.vymera} m<sup>2</sup>
                </span>
              </td>
              <td className="kraj">
                <span>{realita.okres}</span>
              </td>
              <td className="lokalita">
                <span>{realita.lokalita}</span>
              </td>
              <td className="cena">
                <span>{realita.cena}</span>
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
