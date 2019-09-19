import React, { useRef } from "react";
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ContactSection.scss";

import ContactForm from "./ContactForm/ContactForm.jsx";

import { useAnimateObserverOnce } from '../../utils';

const ContactSection = () => {
  const ref = useRef(null);

  const animated = useAnimateObserverOnce({
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
        <div className={`contact__social-container ${animated &&
          "contact__social-container--animated"}`}>
          <a className="contact__social-link" href="https://www.facebook.com/hmaccountingservicesllc/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} className="contact__social-icon" />
          </a>
          <a className="contact__social-link" href="https://www.linkedin.com/in/horacio-moreno-0bb42383/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="contact__social-icon" />
          </a>
        </div>
        <div className="contact__form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
