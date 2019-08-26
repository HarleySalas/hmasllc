import React from "react";

import "./HeroNav.scss";

const HeroNav = () => {
  return (
    <div className="container container--align-right">
      <nav className="hero-nav">
        <ul className="hero-nav__ul">
          <li className="hero-nav__li hover__white-primary ls__medium hero-nav__li--active">
            <a href="#welcome" className="">
              Welcome
            </a>
          </li>
          <li className="hero-nav__li hover__white-primary ls__medium">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="hero-nav__li hover__white-primary ls__medium">
            <a href="#services" className="">
              Services
            </a>
          </li>
          <li className="hero-nav__li hover__white-primary ls__medium">
            <a href="#blog" className="">
              Blog
            </a>
          </li>
          <li className="hero-nav__li hover__white-primary ls__medium">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeroNav;
