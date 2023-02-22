import React from "react";
import { Topbar } from "./../../components/topbar/Topbar";
import { OffersList } from "../../components/offersList/OffersList";
import { Footer } from "../../components/footer/Footer";
import "./offers.scss";
import { Sidebar } from "./../../components/sidebar/Sidebar";

export const Offers = () => {
  return (
    <div className="offersWrapper">
      <Topbar />
      <header>
        <h1 className="titleHeader">Nabídka nemovitostí</h1>
      </header>
      <div className="offersContainer">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <OffersList />
        </div>
      </div>
      <Footer />
    </div>
  );
};
