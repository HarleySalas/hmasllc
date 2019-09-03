import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./DesktopMenu.scss";

const DesktopMenu = props => {
  return (
    <ul className="desktop-menu" onClick={props.navigate}>
      <li
        className={`desktop-menu__item ${props.activeSection.services &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#services">Services</Link>
      </li>
      <li
        className={`desktop-menu__item ${props.activeSection.about &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#about">About</Link>
      </li>
      <NavLink to="/blog">
        <li className="desktop-menu__item">Blog</li>
      </NavLink>
      <li
        className={`desktop-menu__item ${props.activeSection.contact &&
          "desktop-menu__item--active"}`}
      >
        <Link to="/#contact">Contact</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
