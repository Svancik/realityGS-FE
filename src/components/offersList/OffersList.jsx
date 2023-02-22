import React from "react";
import { reality } from "../../data";
import "./offersList.scss";
import { OfferItem } from "./../offerItem/OfferItem";

export const OffersList = () => {
  return (
    <div className="offersListWrapper">
      {reality.map((realita) => (
        <OfferItem realita={realita} />
      ))}
    </div>
  );
};
