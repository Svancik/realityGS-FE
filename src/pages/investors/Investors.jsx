import React from "react";
import { Footer } from "../../components/footer/Footer";
import { Topbar } from "../../components/topbar/Topbar";
import { clankyInvestice } from "../../data";
import { fotkyInvestice } from "../../data";
import "./investors.scss";
import { Article } from "./../../components/article/Article";
import { Photos } from "../../components/photos/Photos";
import { ContactForm } from "../../components/contactForm/ContactForm";

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
        <section>
          {clankyInvestice.map((clanek) => (
            <Article clanek={clanek} />
          ))}
        </section>
        <section>
          <h2> Takto to může vypadat</h2>
          <Photos photos={fotkyInvestice} col3={true} />
        </section>
        <section>
          <h2> Nezávazná poptávka</h2>
          <span>
            {" "}
            Vyplňte všechny potřebné údaje a my se vám ozveme co nejdříve zpět.
          </span>
          <ContactForm />
        </section>
      </div>
      <Footer />
    </>
  );
};
