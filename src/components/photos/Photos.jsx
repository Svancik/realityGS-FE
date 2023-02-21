import React from "react";

import { useState, useEffect } from "react";
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

export const Photos = ({ photos, col3 }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideIndex = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideIndex);
  };

  return (
    <div>
      <div className={col3 ? "photosWrapper col3" : "photosWrapper"}>
        {open && (
          <div className="slider">
            <CancelIcon className="close" onClick={() => setOpen(false)} />
            <ArrowCircleLeftIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].original}
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

        {photos.map((photo, i) => (
          <div className="photo">
            <img
              src={photo.original}
              onClick={() => handleOpen(i)}
              alt="realityImg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
