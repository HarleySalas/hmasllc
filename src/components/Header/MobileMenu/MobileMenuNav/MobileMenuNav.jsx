import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./MobileMenuNav.scss";

import { useSectionObserver, useDisableBodyScroll } from "../../../../utils";

const INITIAL_STATE = {
  about: null,
  services: null,
  contact: null
};

const MobileMenuNav = props => {
  const sectionIds = ["#about", "#services", "#contact"];
  const activeSection = useSectionObserver(sectionIds, INITIAL_STATE);

  useDisableBodyScroll();

  return (
    <div
      className={`mobile-menu__wrapper ${props.open &&
        "mobile-menu__wrapper--active"}`}
    >
      <nav className="mobile-menu__nav">
        <ul className="mobile-menu__ul">
          <Link
            to="/#services"
            className="mobile-menu__link"
            onClick={props.onClick}
          >
            <li
              className={`mobile-menu__li ${activeSection.services &&
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
              className={`mobile-menu__li ${activeSection.about &&
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
              className={`mobile-menu__li ${activeSection.contact &&
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
