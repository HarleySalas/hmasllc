import React, { useRef } from "react";

import "./ContactSection.scss";

import ContactForm from "./ContactForm/ContactForm.jsx";

import { useAnimateObserver } from '../../utils';

const ContactSection = () => {
  const ref = useRef(null);

  const animated = useAnimateObserver({
    itemRef: ref
  })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`container container--padding-3 contact__container ${animated && 'contact__container--animated'}`}>
        <h2 className="contact__heading">Contact</h2>
        <p>Office Hours: Monday - Friday 9am to 5pm EST</p>
        <p>+1 (954) 479 - 9447</p>
        <a href="mailto:horacio@hmasllc.com" className="contact__email">
          horacio@hmasllc.com
        </a>
        <div className="contact__form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
