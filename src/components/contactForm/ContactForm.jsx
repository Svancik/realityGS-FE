import React from "react";
import "./contactForm.scss";

export const ContactForm = () => {
  return (
    <div className="contactFormWrapper">
      <form action="">
        <label htmlFor="name">Jméno a příjmení</label>
        <input type="text" id="name" />

        <input type="email" id="email" />
      </form>
    </div>
  );
};
