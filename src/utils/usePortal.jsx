import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

const usePortal = props => {
  const el = document.createElement("div");

  useEffect(() => {
    portalRoot.appendChild(el);
    return () => {
      portalRoot.removeChild(el);
    };
  }, []);
  return ReactDOM.createPortal(props.children, el);
};

export default usePortal;
