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
    link: "https://www.sreality.cz/detail/prodej/dum/rodinny/podborany-letov-/1320395852",
  },
  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_gY_q/XyXBX8U.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gT_s/AAXBX9j.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gR_s/xWIUAp.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Rooseveltova, Litoměřice",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "60",
    dispozice: "2+1",
    cena: "4 600 000",
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
    link: "https://www.sreality.cz/detail/prodej/byt/3+1/most-most-albrechticka/3803825228#img=0&fullscreen=false",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QL_Jy/i6GJuD.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QN_Jy/auyBE2B.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QL_Jy/GqtJuG.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Jaroslava Průchy, Most",
    okres: "Most",
    kraj: "Ústecký kraj",
    vymera: "68",
    dispozice: "3+1",
    cena: "1 800 000",
    link: "https://www.sreality.cz/detail/prodej/byt/3+1/most-most-jaroslava-pruchy/3658597452",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QP_Kx/9Guai9.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QL_Jx/78wBw1E.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gQ_q/CFwBwXr.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Rooseveltova, Litoměřice",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "76",
    dispozice: "2+1",
    cena: "4 100 000",
    link: "https://www.sreality.cz/detail/prodej/byt/2+1/litomerice-predmesti-rooseveltova/3876246604",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QR_L5/ixPCETy.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QM_KW/H0nRPf.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QO_Ks/Qjpxj6.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Kosmonautů, Litoměřice",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "40",
    dispozice: "2+1",
    cena: "2 000 000",
    link: "https://www.sreality.cz/detail/prodej/byt/2+1/litomerice-predmesti-kosmonautu/433964108",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QN_Jw/01d9WN.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gV_s/ukV3kY.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gY_q/b4O349.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Jaroslava Vrchlického, Most",
    okres: "Most",
    kraj: "Ústecký kraj",
    vymera: "55",
    dispozice: "2+1",
    cena: "2 500 000",
    link: "https://www.sreality.cz/detail/prodej/byt/2+1/most-most-jaroslava-vrchlickeho/513119308",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_gQ_q/yCCBdkN.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gZ_r/r6vBdjc.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QL_Jx/vc9BhIi.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Masarykova, Postoloprty",
    okres: "Louny",
    kraj: "Ústecký kraj",
    vymera: "66",
    dispozice: "3+1",
    cena: "1 799 000",
    link: "https://www.sreality.cz/detail/prodej/byt/3+1/postoloprty-postoloprty-masarykova/1659212876#img=3",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_gX_q/qys34E.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QP_Ku/SYGUHt.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gZ_r/7DC31G.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Úštěk - Konojedy",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "66",
    dispozice: "3+1",
    cena: "999 000",
    link: "https://www.sreality.cz/detail/prodej/byt/3+1/ustek-konojedy-/1984205900",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QJ_Jg/APRBfFv.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gR_s/rfOWjy.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_QO_Ks/Cm2N7X.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "J. A. Komenského, Most",
    okres: "Most",
    kraj: "Ústecký kraj",
    vymera: "82",
    dispozice: "4+1",
    cena: "1 400 000",
    link: "https://www.sreality.cz/detail/prodej/byt/4+1/most-most-j--a--komenskeho/1941152844#img=10",
  },

  {
    typ: "Byt",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QR_L5/AruBhB4.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gQ_q/i0LBdeY.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gW_q/pHbBdnX.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Pražská, Litoměřice",
    okres: "Litoměřice",
    kraj: "Ústecký kraj",
    vymera: "60",
    dispozice: "2+1",
    cena: "2 900 000",
    link: "https://www.sreality.cz/detail/prodej/byt/2+1/litomerice-predmesti-prazska/2508432460",
  },

  {
    typ: "Pole",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_QK_Jb/2hTBxjV.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gT_s/t2UBxS7.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gY_q/gOABxTn.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Uničov - Střelice",
    okres: "Olomouc",
    kraj: "Olomoucký",
    vymera: "205 000",
    dispozice: "Pole",
    cena: "13 383 435",
    link: "https://www.sreality.cz/detail/prodej/pozemek/pole/unicov-strelice-/601347148",
  },

  {
    typ: "Pole",
    foto: [
      "https://d18-a.sdn.cz/d_18/c_img_gR_q/o7rupJ.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gT_s/t2UBxS7.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
      "https://d18-a.sdn.cz/d_18/c_img_gY_q/gOABxTn.jpeg?fl=res,749,562,3|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    ],
    lokalita: "Kostomlaty pod Milešovkou",
    okres: "Teplice",
    kraj: "Ústecký",
    vymera: "1035",
    dispozice: "Pozemek",
    cena: "1 119 870",
    link: "https://www.sreality.cz/detail/prodej/pozemek/bydleni/kostomlaty-pod-milesovkou--/430089292#img=2",
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
            <th>Výměra</th>
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
