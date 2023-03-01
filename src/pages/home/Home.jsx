import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import { Slider } from "../../components/slider/Slider";
import { News } from "../../components/news/News";
import { Footer } from "../../components/footer/Footer";
import "./home.scss";
import { OurServices } from "../../components/ourServices/OurServices";

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
      <div className="block" id="sluzby">
        <OurServices />
      </div>
      <Footer />
    </div>
  );
};
