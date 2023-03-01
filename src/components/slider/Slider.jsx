import React from "react";
import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./slider.scss";
import { SliderInfo } from "../sliderInfo/SliderInfo";
import { reality } from "./../../data";

//TODO: DOKONČIT SLIDER responsivní zobrazení

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideReality = reality.filter((realita) => realita.popis);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? slideReality.length - 1 : (prev) => prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideReality.length - 1 ? 0 : (prev) => prev + 1
    );
  };

  return (
    <div className="slider">
      <SliderInfo realita={slideReality[currentSlide]} />
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={reality[0].foto[0]} alt="" />
        <img src={reality[1].foto[0]} alt="" />
        <img src={reality[2].foto[0]} alt="" />
      </div>

      <div className="icons" id="aktuality">
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
