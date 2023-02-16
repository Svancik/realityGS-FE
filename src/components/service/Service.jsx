import React from "react";
import "./service.scss";

export const Service = ({ service }) => {
  console.log(service.icon);
  return (
    <div className="block">
      <div className="serviceWrapper">
        <div className={service.id % 2 === 1 ? "img rightContent" : "img"}>
          <img
            className="icon"
            src={require(`../../media/design/${service.icon}.jpg`)}
            alt=""
          />
        </div>
        <div className="desc">
          <h5>{service.header}</h5>
          <span>{service.text}</span>
        </div>
      </div>

    </div>
  );
};
