import React from "react";
import { services } from "../../data";
import { Service } from "../service/Service";
import "./ourServices.scss";

export const OurServices = () => {
  return (
    <div className="ourServicesWrapper">
      <h1 className="titleHeader">NAŠE SLUŽBY</h1>
      {services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};
