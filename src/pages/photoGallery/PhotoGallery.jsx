import React from "react";
import "./photoGallery.scss";
import { Topbar } from "./../../components/topbar/Topbar";
import { Footer } from "../../components/footer/Footer";
import { Photos } from "../../components/photos/Photos";

export const PhotoGallery = () => {
  return (
    <div className="photoGalleryWrapper">
      <Topbar />
      <Photos />
      <Footer />
    </div>
  );
};
