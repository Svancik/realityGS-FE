import logo from "./logo.svg";
import "./App.scss";
import { Topbar } from "./components/topbar/Topbar";
import { Slider } from "./components/slider/Slider";
import { News } from "./components/news/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Intro } from "./components/intro/Intro";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="block  block--black">
          <Topbar />
        </div>
        <div className="block  mTop">
          <Slider />
        </div>
        <div className="news block">
          <News id="aktuality" />
        </div>
        <div className="block">
          <Intro />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
