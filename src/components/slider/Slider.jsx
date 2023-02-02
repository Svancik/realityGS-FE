import React from "react";
import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";
import { SliderInfo } from "../sliderInfo/SliderInfo";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/IMG_1276.jpg?alt=media&token=746d5936-5640-460b-a66e-564e949907f2",
    "https://d18-a.sdn.cz/d_18/c_img_gY_q/XyXBX8U.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
    "https://d18-a.sdn.cz/d_18/c_img_QR_L5/9YNBHWb.jpeg?fl=res,1920,1080,1|wrm,/watermark/sreality.png,10|shr,,20|jpg,90",
  ];

  const dataInfo = [
    {
      typ: "Rodinný dům",
      lokalita: "Podbořany - Letov",
      okres: "Louny",
      kraj: "Ústecký kraj",
      vymera: "109",
      dispozice: "3+1",
      pozemek: "416",
      cena: "3 090 000",
      maklerFoto: "https://8d2b138d04.clvaw-cdnwnd.com/46489c3690947dfb9ad4a7012aa8409d/200000162-c7adbc7ade/Sn%C3%ADmek%20obrazovky%202022-11-30%20v%C2%A012.04.23.webp?ph=8d2b138d04",
      maklerTel: "720 978 703",
      maklerMail: "jakub.zak@realitygs.cz",
      maklerJmeno: "Jakub Žák",
      popis: `Hledáte rodinný dům se zahrádkou na venkově za rozumnou cenu? Tak právě pro Vás máme nově v nabídce tento patrový, podsklepený dům 3+1 v obci Podbořany, okres Louny. Dům prošel před nedávnem částečnou rekonstrukcí- má nově udělanou střechu, fasádu a zateplené první patro a půdu. V přízemí naleznete vstupní chodbu, prosklenou terasu, prostorný obývací pokoj s krbovými kamny, kuchyni s prostorem na jídelní stůl a koupelnu s velkou vanou a WC. V prvním patře jsou dva pokoje a samostatné WC. Zahrádka o výměře 300m2 Vám nabízí pergolu s posezením, udírnu, přístřešek na auto, dílnu a záhonek. V domě je zavedena elektřina 230V a 380V, pitná voda z řádu, septik a vytápění na tuhá paliva. O ceně je možné jednat. Dům je nutno vidět na vlastní oči, proto mě neváhejte kontaktovat a domluvíme si nezávaznou prohlídku. V případě zájmu o financování jsme Vám schopni zajistit nejvýhodnější nabídku na trhu.`,
    },
    {
      typ: "Byt",
      lokalita: "Podbořany - Letov",
      okres: "Louny",
      kraj: "Ústecký kraj",
      vymera: "109",
      pozemek: "416",
      cena: "3 090 000",
      popis: `Hledáte rodinný dům se zahrádkou na venkově za rozumnou cenu? Tak právě pro Vás máme nově v nabídce tento patrový, podsklepený dům 3+1 v obci Podbořany, okres Louny. Dům prošel před nedávnem částečnou rekonstrukcí- má nově udělanou střechu, fasádu a zateplené první patro a půdu. V přízemí naleznete vstupní chodbu, prosklenou terasu, prostorný obývací pokoj s krbovými kamny, kuchyni s prostorem na jídelní stůl a koupelnu s velkou vanou a WC. V prvním patře jsou dva pokoje a samostatné WC. Zahrádka o výměře 300m2 Vám nabízí pergolu s posezením, udírnu, přístřešek na auto, dílnu a záhonek. V domě je zavedena elektřina 230V a 380V, pitná voda z řádu, septik a vytápění na tuhá paliva. O ceně je možné jednat. Dům je nutno vidět na vlastní oči, proto mě neváhejte kontaktovat a domluvíme si nezávaznou prohlídku. V případě zájmu o financování jsme Vám schopni zajistit nejvýhodnější nabídku na trhu.`,
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <SliderInfo dataInfo={dataInfo[currentSlide]} />
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};
