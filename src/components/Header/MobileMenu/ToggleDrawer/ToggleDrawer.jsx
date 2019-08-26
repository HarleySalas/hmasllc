import React, { useEffect, useState } from "react";

import "./ToggleDrawer.scss";

const ToggleDrawer = ({ open, children, openClass, closeClass }) => {
  const [shouldRender, setRender] = useState(open);

  useEffect(() => {
    if (open) setRender(true);
  }, [open]);

  const onAnimationEnd = () => {
    if (!open) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={`toggle-drawer ${open ? openClass : closeClass}`}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default ToggleDrawer;
