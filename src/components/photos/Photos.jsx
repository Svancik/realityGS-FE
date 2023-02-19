import React from "react";
import { galleryPhotos } from "../../data";
import "./photos.scss";

/*
Jak vytvořit fotogalerii 
https://github.com/webstylepress/React-JS-Image-Gallery/blob/main/src/components/WSPGallery.jsx

Jak použít klávesy na scrollování fotek
https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys

*/

export const Photos = () => {
  return (
    <div className="photosWrapper">
      {galleryPhotos.map((photo) => (
        <div className="photo">
          <img src={photo} alt="" />
          <h1>{galleryPhotos.indexOf(photo)}</h1>
        </div>
      ))}
    </div>
  );
};
