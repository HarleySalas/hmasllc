import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./DesktopMenu.scss";

import { useSectionObserver } from "../../../utils";

const INITIAL_STATE = {
  about: null,
  services: null,
  contact: null
};

const DesktopMenu = () => {
  const sectionIds = ["#about", "#services", "#contact"];

  const activeSection = useSectionObserver(sectionIds, INITIAL_STATE);

  return (
    <ul className="desktop-menu">
      <li
        className={`desktop-menu__item ${activeSection.services &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#services">Services</Link>
      </li>
      <li
        className={`desktop-menu__item ${activeSection.about &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#about">About</Link>
      </li>
      <NavLink to="/blog">
        <li className="desktop-menu__item">Blog</li>
      </NavLink>
      {/* <li className="desktop-menu__item">
        <NavLink to="/blog">Blog</NavLink>
      </li> */}
      <li
        className={`desktop-menu__item ${activeSection.contact &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#contact">Contact</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
