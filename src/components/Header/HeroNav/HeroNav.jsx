import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import AnimateHeader from "../../../components/Header/AnimateHeader/AnimateHeader.jsx";
import MobileMenu from '../MobileMenu/MobileMenu.jsx';

import "./HeroNav.scss";

const HeroNav = props => {
  const [shouldRender, setRender] = useState(false);

  useEffect(() => {
    const homePage = document.getElementById("homePage");
    if (homePage) {
      setRender(true);
    } else {
      setRender(false);
    }
  }, [props.nav]);
  return (
    shouldRender && (
      <React.Fragment>
        <div className="container container--align-right">
          <nav className="hero-nav">
            <ul className="hero-nav__ul" onClick={props.onClick}>
              <li className="hero-nav__li">
                <Link to="/#services">Services</Link>
              </li>
              <li className="hero-nav__li">
                <Link to="/#about">About</Link>
              </li>
              <Link to="/blog">
                <li className="hero-nav__li">Blog</li>
              </Link>
              <li className="hero-nav__li">
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hero-nav__mobile">
          <MobileMenu navigate={props.navigate} activeSection={props.activeSection} home='home' />
        </div>
      </React.Fragment>
    )
  );
};

export default HeroNav;
