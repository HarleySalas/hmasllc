import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./MobileMenuNav.scss";

import { useDisableBodyScroll } from "../../../../utils";

const MobileMenuNav = props => {
  useDisableBodyScroll();

  return (
    <div className="mobile-menu__wrapper">
      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__ul" onClick={props.navigate}>
          <Link
            to="/#services"
            className="mobile-menu__link"
            onClick={props.onClick}
          >
            <li
              className={`mobile-menu__li ${props.activeSection.services &&
                "mobile-menu__li--active"}`}
            >
              Services
            </li>
          </Link>
          <Link
            to="/#about"
            className="mobile-menu__link"
            onClick={props.onClick}
          >
            <li
              className={`mobile-menu__li ${props.activeSection.about &&
                "mobile-menu__li--active"}`}
            >
              About
            </li>
          </Link>
          <NavLink
            to="/blog"
            className="mobile-menu__link"
            onClick={props.onClick}
          >
            <li className="mobile-menu__li">Blog</li>
          </NavLink>
          <Link
            to="/#contact"
            className="mobile-menu__link"
            onClick={props.onClick}
          >
            <li
              className={`mobile-menu__li ${props.activeSection.contact &&
                "mobile-menu__li--active"}`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenuNav;
