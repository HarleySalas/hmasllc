import React, { useLayoutEffect } from "react";

const useDisableBodyScroll = () => {
  useLayoutEffect(() => {
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
