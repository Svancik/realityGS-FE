import React from "react";
import { Footer } from "../../components/footer/Footer";
import { TeamInfo } from "../../components/teamInfo/TeamInfo";
import { Topbar } from "../../components/topbar/Topbar";
import { useEffect } from "react";
import "./team.scss";

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="teamWrapper">
      <Topbar />
      <TeamInfo />
      <Footer />
    </div>
  );
};
