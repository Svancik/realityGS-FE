import React from "react";
import { Link } from "react-router-dom";
import "./article.scss";

export const Article = ({ clanek }) => {
  return (
    <div className="articleBlock">
      <article className="grid grid--1x2 feature">
        <div
          className={
            clanek.id % 2 === 1
              ? "featuredContent rightContent"
              : "featuredContent"
          }
        >
          <h3>{clanek.nadpis}</h3>
          <hr />
          <div className="featureDesc">
            <span>{clanek.text}</span>
          </div>
          <p>
            <b>Zdroj: </b>
            <Link to={clanek.link}>
              <>
                {clanek.link.substring(0, 85)}
                ...
              </>
            </Link>
          </p>
          <button> ZOBRAZIT ČLÁNEK</button>
        </div>
        <div className={clanek.id % 2 === 1 ? "leftImg" : ""}>
          <img
            src={clanek.img}
            alt=""
            className={!clanek.isIcon && "photoImg"}
          />
        </div>
      </article>
    </div>
  );
};
