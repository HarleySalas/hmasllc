import React, { useRef } from "react";

import {
  usePortal,
  useOnClickOutside,
  useDisableBodyScroll
} from "../../utils";

import "./Modal.scss";

const Modal = props => {
  const ref = useRef();

  useOnClickOutside(ref, () => props.onClickOutside());

  useDisableBodyScroll();

  return (
    <usePortal>
      <div className="modal">
        <div className="modal__wrapper" ref={ref}>
          {props.children}
        </div>
      </div>
    </usePortal>
  );
};

export default Modal;
