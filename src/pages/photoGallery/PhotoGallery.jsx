import React from "react";
import { galleryPhotos } from "../../data";

import { Topbar } from "./../../components/topbar/Topbar";
import { Footer } from "../../components/footer/Footer";
import { Photos } from "../../components/photos/Photos";
import "./photoGallery.scss";
export const PhotoGallery = () => {
  return (
    <div className="photoGalleryWrapper">
      <Topbar />
      <div className="photosContainer">
        <h1 className="titleHeader">Fotogalerie</h1>
        <span className="photosText">
          podívejte se na ukázky naší práce, prodaných nemovitostí máme na svém
          kontě již desítky...
        </span>

        <Photos photos={galleryPhotos} />
        <div className="photosText">
          Vybrané snímky pochází z obchodních realizací našeho týmu a všechny
          jsou pořízeny od profesionálního fotografa, který je též schopný
          realizovat videoprohlídku Vaší nemovitosti, či pořídit záběry ze
          vzduchu dronem. Zajímá-li Vás více, neváhejte nás kontaktovat!
        </div>
      </div>
      <Footer />
    </div>
  );
};
