import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Topbar } from "../../components/topbar/Topbar";
import "./investors.scss";

export const Investors = () => {
  return (
    <>
      <Topbar />
      <div className="investorsWrapper">
        <header>
          <h1 className="titleHeader">Pro investory</h1>
          <span>
            Ústecký kraj, region s nejlevnějšími byty a zároveň nejvyšší
            výnosností v celé České republice. Je-li Vaším zájmem nákup
            investičních bytů, podívejte se na naše speciální služby, které Vám
            pomohou např. s nastavením Vašeho nemovitostního portfolia, s
            vyhledáním vhodných investičních bytů, jejich přípravu na pronájem s
            následnou správou, či jejich údržbu a drobné opravy. Obraťte se na
            nás, určitě se dohodneme...
          </span>
        </header>
      </div>
      <Footer />
    </>
  );
};
