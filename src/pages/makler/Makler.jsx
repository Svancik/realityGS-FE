import React from "react";
import "./makler.scss";
import { Topbar } from "./../../components/topbar/Topbar";
import { RealityTable } from "../../components/realityTable/RealityTable";
import { Agent } from "./../../components/agent/Agent";
import { Footer } from "../../components/footer/Footer";


export const Makler = () => {
  return (
    <div className="maklerWrapper">
      <Topbar />
      <Agent />
      <RealityTable />
      <Footer />
    </div>
  );
};
