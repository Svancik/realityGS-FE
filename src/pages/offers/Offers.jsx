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
  const [locationChecked, setLocationChecked] = useState("");
  // const [contractChecked, setContractChecked] = useState("");
  const [typeChecked, setTypeChecked] = useState("");

  // const handleContract = (e) => {
  //   e.target.value === "pronajem"
  //     ? setReality(dataReality.filter((realita) => realita.pronajem))
  //     : setReality(dataReality.filter((realita) => !realita.pronajem));
  //   setContractChecked(e.target.value);
  // };

  const handleLocation = (e) => {
    setReality(
      dataReality.filter((realita) => realita.okres === e.target.value)
    );
    setTypeChecked("");
    setLocationChecked(e.target.value);
  };

  const handleFilterReset = () => {
    setReality(dataReality);
    setLocationChecked("");
    setTypeChecked("");
    // setContractChecked("");
  };

  const handleType = (e) => {
    setReality(dataReality.filter((realita) => realita.typ === e.target.value));
    setTypeChecked(e.target.value);
    setLocationChecked("");
  };

  return (
    <div className="offersWrapper">
      <Topbar />
      <header>
        <h1 className="titleHeader">Nabídka nemovitostí</h1>
      </header>
      <div className="offersContainer">
        <div className="left">
          <Sidebar
            reality={reality}
            // handleContract={handleContract}
            // contractChecked={contractChecked}
            handleType={handleType}
            typeChecked={typeChecked}
            handleLocation={handleLocation}
            locationChecked={locationChecked}
            handleFilterReset={handleFilterReset}
          />
        </div>
        <div className="right">
          <OffersList reality={reality} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
