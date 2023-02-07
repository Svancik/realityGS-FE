import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import { Slider } from "../../components/slider/Slider";
import { News } from "../../components/news/News";
import { Intro } from "../../components/intro/Intro";
import { Footer } from "../../components/footer/Footer";
import "./home.scss";

export const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="block  block--black">
        <Topbar />
      </div>
      <div className="block">
        <Slider />
      </div>
      <div className="news block">
        <News id="aktuality" />
      </div>
      <div className="block">
        <Intro />
      </div>
      <Footer />
    </div>
  );
};
