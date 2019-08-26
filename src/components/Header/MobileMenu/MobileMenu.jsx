import React from "react";

import "./MobileMenu.scss";

import { useToggle } from "../../../utils";

import MobileMenuNav from "./MobileMenuNav/MobileMenuNav.jsx";

import ToggleDrawer from "./ToggleDrawer/ToggleDrawer.jsx";

const MobileMenu = () => {
  const [open, toggle] = useToggle(false);

  return (
    <React.Fragment>
      <button className="mobile-menu__toggle" onClick={toggle}>
        <span
          className={`mobile-menu__icon ${open && "mobile-menu__icon--active"}`}
        />
      </button>
      {/* {open && <MobileMenuNav open={open} onClick={toggle} />} */}

      <ToggleDrawer
        open={open}
        openClass="mobile-menu__openDrawer"
        closeClass="mobile-menu__closeDrawer"
      >
        <MobileMenuNav open={open} onClick={toggle} />
      </ToggleDrawer>
    </React.Fragment>
  );
};

export default MobileMenu;
