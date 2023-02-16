import React from "react";
import { Footer } from "../../components/footer/Footer";
import { TeamInfo } from "../../components/teamInfo/TeamInfo";
import { Topbar } from "../../components/topbar/Topbar";
import "./team.scss";

export const Team = () => {
  return (
    <div className="teamWrapper">
      <Topbar />
      <TeamInfo />
      <Footer />
    </div>
  );
};
