import React from "react";

import "./ContactSection.scss";

import ContactForm from "./ContactForm/ContactForm.jsx";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container container--padding-5 contact__container">
        <div className="contact__form-wrapper">
          <h2 className="contact__heading">Contact</h2>
          <ContactForm />
        </div>
        <div className="contact__wrapper" />
      </div>
    </section>
  );
};

export default ContactSection;
