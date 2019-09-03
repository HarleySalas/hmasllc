import React from "react";

import "./MobileMenu.scss";

import { useToggle } from "../../../utils";

import MobileMenuNav from "./MobileMenuNav/MobileMenuNav.jsx";
import ToggleDrawer from "./ToggleDrawer/ToggleDrawer.jsx";

const MobileMenu = props => {
  const [open, toggle] = useToggle(false);

  return (
    <React.Fragment>
      <button className={`mobile-menu__toggle ${props.home && 'mobile-menu__toggle--lowIndex'}`} onClick={toggle}>
        <span
          className={`mobile-menu__icon ${open && "mobile-menu__icon--active"}`}
        />
      </button>

      <ToggleDrawer
        open={open}
        openClass="mobile-menu__openDrawer"
        closeClass="mobile-menu__closeDrawer"
        home={props.home}
      >
        <MobileMenuNav
          onClick={toggle}
          navigate={props.navigate}
          activeSection={props.activeSection}
        />
      </ToggleDrawer>
    </React.Fragment>
  );
};

export default MobileMenu;
