import React from "react";

import "./HeroSection.scss";

import HeroNav from "../../layout/navigation/HeroNav/HeroNav.jsx";

import Button from "../../components/Button/Button.jsx";
import DotPattern from "../../components/DotPattern/DotPattern.jsx";

const HeroSection = () => {
  return (
    <section className="hero">
      <HeroNav />
      <div className="hero__background">
        <div className="container container--align-center">
          <h1 className="hero__title">HM</h1>
          <div className="hero__subtitle">Accounting Services</div>
          <Button btnText="Contact" btnStyle="black" btnSize="lg" />
        </div>
      </div>
      {/* <DotPattern /> */}
    </section>
  );
};

export default HeroSection;
