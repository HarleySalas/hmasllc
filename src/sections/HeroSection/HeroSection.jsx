import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./HeroSection.scss";
import bgImg from "./assets/bill-closeup.jpg";
import Button from "../../components/Button/Button.jsx";

import { useAnimateObserver } from "../../utils";

const HeroSection = props => {
  const itemRef = useRef(null);
  const itemRef2 = useRef(null);
  const itemRef3 = useRef(null);
  const itemRef4 = useRef(null);
  const bgRef = useRef(null);

  const animated = useAnimateObserver({
    itemRef: itemRef,
    offsetPx: 0
  });

  const animated2 = useAnimateObserver({
    itemRef: itemRef2,
    offsetPx: 0
  });

  const animated3 = useAnimateObserver({
    itemRef: itemRef3,
    offsetPx: 0
  });

  const animated4 = useAnimateObserver({
    itemRef: itemRef4,
    offsetPx: 0
  });

  const animatedBG = useAnimateObserver({
    itemRef: bgRef,
    offsetPx: 0
  });

  return (
    <React.Fragment>
      <section id="hero" className="hero">
        <div className="hero__scrollpoint" id="homePage" />
        <div className="hero__shape__stroke">
          <div className="hero__shape__stroke__overlay">
            <div className="hero__shape" ref={bgRef}>
              <img
                src={bgImg}
                alt="One hundred dollar bill close-up"
                className={`hero__image ${animatedBG &&
                  "hero__image--animated"}`}
              />
              <div className="hero__image__overlay">
                <div className="container container--not-rel">
                  <h1
                    className={`hero__title ${animated &&
                      "hero__title--animated"}`}
                    ref={itemRef}
                  >
                    HM
                  </h1>
                  <div
                    className={`hero__subtitle ${animated2 &&
                      "hero__subtitle--animated"}`}
                    ref={itemRef2}
                  >
                    Accounting Services
                  </div>
                  <div
                    className={`hero__divider ${animated3 &&
                      "hero__divider--animated"}`}
                    ref={itemRef3}
                  />
                  <div className="hero__contact-ref" ref={itemRef4} />
                  <Link
                    to="#contact"
                    className={`hero__contact ${animated4 &&
                      "hero__contact--animated"}`}
                  >
                    <Button
                      btnText="Contact"
                      btnStyle="whiteOutline"
                      btnSize="lg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
