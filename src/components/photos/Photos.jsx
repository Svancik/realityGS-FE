import React from "react";
import { galleryPhotos } from "../../data";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import "./photos.scss";

/*
Jak vytvořit fotogalerii 
https://github.com/webstylepress/React-JS-Image-Gallery/blob/main/src/components/WSPGallery.jsx

Jak použít klávesy na scrollování fotek
https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys

*/

export const Photos = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex =
        slideNumber === 0 ? galleryPhotos.length - 1 : slideNumber - 1;
    } else {
      newSlideIndex =
        slideNumber === galleryPhotos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideIndex);
  };

  return (
    <div className="photosContainer">
      <h1 className="titleHeader">Fotogalerie</h1>
      <span className="photosText">
        podívejte se na ukázky naší práce, prodaných nemovitostí máme na svém
        kontě již desítky...
      </span>
      <div className="photosWrapper">
        {open && (
          <div className="slider">
            <CancelIcon className="close" onClick={() => setOpen(false)} />
            <ArrowCircleLeftIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={galleryPhotos[slideNumber].original}
                alt=""
                className="sliderImg"
              />
            </div>
            <ArrowCircleRightIcon
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        {galleryPhotos.map((photo, i) => (
          <div className="photo">
            <img
              src={photo.original}
              onClick={() => handleOpen(i)}
              alt="realityImg"
            />
          </div>
        ))}
      </div>
      <hr />
      <div className="photosText">
        Vybrané snímky pochází z obchodních realizací našeho týmu a všechny jsou
        pořízeny od profesionálního fotografa, který je též schopný realizovat
        videoprohlídku Vaší nemovitosti, či pořídit záběry ze vzduchu dronem.
        Zajímá-li Vás více, neváhejte nás kontaktovat!
      </div>
    </div>
  );
};
