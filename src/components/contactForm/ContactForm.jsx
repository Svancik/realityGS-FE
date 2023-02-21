import React from "react";
import "./contactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contactFormWrapper">
      <form action="">
        <div className="form-row">
          <div className="left">
            <label htmlFor="name">Jméno a příjmení</label>
          </div>
          <input type="text" id="name" />
        </div>

        <div className="form-row">
          <div className="left">
            <label htmlFor="email">Email</label>
          </div>
          <input type="text" id="email" placeholder="@" />
        </div>

        <div className="form-row">
          <div className="left">
            <label htmlFor="email">Telefonní číslo</label>
          </div>
          <input type="number" id="number" placeholder="+420" />
        </div>

        <div className="form-row">
          <div className="left">
            <label htmlFor="email">Zvolená služba</label>
          </div>
          <select name="cars" id="cars">
            <option value="volvo">Hledám investiční nemovitost</option>
            <option value="saab">Hledám rekonstrukci nemovitosti</option>
            <option value="opel">Hledám správu nemovitosti</option>
            <option value="audi">Jiné</option>
          </select>
        </div>

        <div className="form-row">
          <div className="left">
            <label htmlFor="email">Zpráva</label>
          </div>
          <textarea
            rows="10"
            type="text"
            id="text"
            placeholder="Zanechte nám vaši zprávu."
            size="50"
          />
        </div>

        <div className="form-row">
          <button className="poptavka">NEZÁVAZNĚ POPTAT</button>
        </div>
      </form>
    </div>
  );
};
