import React, { useRef } from "react";

import "./AboutSection.scss";

import chachyImg from "./assets/chachy-photo.jpg";

import { useAnimateObserver } from '../../utils';

const AboutSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const animation1 = useAnimateObserver({
    itemRef: ref1
  })

  const animation2 = useAnimateObserver({
    itemRef: ref2
  })
  return (
    <section id="about" className="about">
      <div className="container container--padding-5">
        <div className={`about__section about__section--left ${animation1 && 'about__section--left--animated'}`} ref={ref1}>
          <h2 className="about__heading">About</h2>
          <div className="about__img__wrapper">
            <img
              src={chachyImg}
              alt="Picture of Horacio Moreno"
              className="about__img"
            />
            <div className="about__img__content">
              <div className="about__img__text">Horacio Moreno</div>
            </div>
          </div>
        </div>
        <div className={`about__section about__section--right ${animation2 && 'about__section--right--animated'}`} ref={ref2}>
          <div className="about__content-wrapper">
            <p className="about__p">
              Horacio, "Chachy" Moreno started his accounting career in 2012
              after receiving his degree in Accounting Operations from Sheridan
              Technical College. Chachy served as the head accountant for
              several companies over the next three years before starting his
              own company, <i>"HM Accounting Services"</i> in 2015.
            </p>
            <p className="about__p">
              Chachy’s mission is to help people create the space in their lives
              for their passions and their careers. The step to bring on an
              accountant for your business isn’t just about the value of your
              time. It’s also about whether or not you can handle your business
              finances as well as a professional would.
            </p>
            <p className="about__p">
              So what does that mean for you and your business? How can an
              accountant’s way with numbers and super-human calculating skills
              make your life easier? These are all great questions that can be
              answered by the expert himself.
            </p>
            <p className="about__p">
              Always just a phone call away, this finance nerd could be your
              knight in shining glasses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
