import React from "react";
import { useLocation } from "react-router-dom";
import { Topbar } from "./../../components/topbar/Topbar";
import { RealityTable } from "../../components/realityTable/RealityTable";
import { Agent } from "./../../components/agent/Agent";
import { Footer } from "../../components/footer/Footer";
import "./makler.scss";

export const Makler = () => {
  const maklerId = useLocation().pathname.split("/")[2];

  return (
    <div className="maklerWrapper">
      <Topbar />
    
      <Agent maklerId={maklerId} />
      {/* <div className="typeHeader">
        <h2>Nemovitosti</h2>
      </div> */}
      <RealityTable maklerId={maklerId} />
      <Footer />
    </div>
  );
};
