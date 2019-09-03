import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import Logo from "./assets/hmas-logo.svg";

import DesktopMenu from "./DesktopMenu/DesktopMenu.jsx";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";
import AnimatedLogo from "./AnimateLogo/AnimateLogo.jsx";
import AnimateHeader from "./AnimateHeader/AnimateHeader.jsx";
import HeroNav from "./HeroNav/HeroNav.jsx";

import { useSectionObserver, useToggle } from "../../utils";

//Initial State for Section Observer
const INITIAL_STATE = {
  about: null,
  services: null,
  contact: null
};

const Header = props => {
  const sectionIds = ["#about", "#services", "#contact"];
  const [nav, navigate] = useToggle(false);

  //need to pass navgiate props from useToggle and to pass activeSection props to menus for style
  const activeSection = useSectionObserver(sectionIds, INITIAL_STATE, navigate);

  return (
    <React.Fragment>
      <AnimateHeader
        nav={nav}
        animatedClass="header--animated"
        hiddenClass="header--hidden"
      >
        <header className="header">
          <div className="header__line" />
          <div className="container container--nopos header__container">
            <AnimatedLogo nav={nav} navigate={navigate}>
              <Link to="/" className="header__logo" onClick={navigate}>
                <img
                  src={Logo}
                  className="header__logo"
                  alt="HM Accounting Services Logo"
                />
              </Link>
            </AnimatedLogo>
            <DesktopMenu navigate={navigate} activeSection={activeSection} />
            <MobileMenu navigate={navigate} activeSection={activeSection} />
          </div>
        </header>
      </AnimateHeader>
      <HeroNav onClick={navigate} nav={nav} navigate={navigate} activeSection={activeSection} />
      {props.children}
    </React.Fragment>
  );
};

export default Header;
