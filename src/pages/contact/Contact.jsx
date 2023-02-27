import React from "react";
import { ContactInfo } from "../../components/contactInfo/ContactInfo";
import { Footer } from "../../components/footer/Footer";
import { Topbar } from "../../components/topbar/Topbar";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contactWrapper">
      {" "}
      <Topbar />
      <ContactInfo />
      <Footer />
    </div>
  );
};
