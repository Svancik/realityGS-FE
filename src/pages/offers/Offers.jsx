import React from "react";
import { Topbar } from "./../../components/topbar/Topbar";
import { OffersList } from "../../components/offersList/OffersList";
import { Footer } from "../../components/footer/Footer";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { reality as dataReality } from "./../../data";
import { useState } from "react";
import "./offers.scss";

export const Offers = () => {
  const [reality, setReality] = useState(dataReality);

  const handleSmlouva = (e) => {
    e.target.value === "pronajem"
      ? setReality(dataReality.filter((realita) => realita.pronajem))
      : setReality(dataReality.filter((realita) => !realita.pronajem));
  };

  return (
    <div className="offersWrapper">
      <Topbar />
      <header>
        <h1 className="titleHeader">Nabídka nemovitostí</h1>
      </header>
      <div className="offersContainer">
        <div className="left">
          <Sidebar reality={reality} handleSmlouva={handleSmlouva} />
        </div>
        <div className="right">
          <OffersList reality={reality} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
