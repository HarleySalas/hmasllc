import React, { useEffect } from "react";

const useDisableBodyScroll = () => {
  useEffect(() => {
    const defaultStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = defaultStyle;
    };
  }, []);
};

export default useDisableBodyScroll;

//USAGE
// before return, call 'UseDisableBodyScroll()'
