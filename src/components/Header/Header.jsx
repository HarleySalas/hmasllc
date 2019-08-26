import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import Logo from "./assets/hmas-logo.svg";

import DesktopMenu from "./DesktopMenu/DesktopMenu.jsx";
import MobileMenu from "./MobileMenu/MobileMenu.jsx";

const Header = props => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__line" />
        <div className="container container--nopos header__container">
          <Link to="/" className="header__logo">
            <img
              src={Logo}
              className="header__logo"
              alt="HM Accounting Services Logo"
            />
          </Link>
          <DesktopMenu />
          <MobileMenu />
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
};

export default Header;
