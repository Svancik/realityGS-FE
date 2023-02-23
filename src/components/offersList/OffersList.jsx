import React from "react";
import "./offersList.scss";
import { OfferItem } from "./../offerItem/OfferItem";

export const OffersList = ({ reality }) => {
  reality.sort((a, b) => parseInt(b.cena) - parseInt(a.cena));

  return (
    <div className="offersListWrapper">
      {reality.map((realita) => (
        <OfferItem realita={realita} />
      ))}
    </div>
  );
};
