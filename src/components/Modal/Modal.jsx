import React, { useRef } from "react";

import {
  Portal,
  useOnClickOutside,
  useDisableBodyScroll
} from "../../utils";

import "./Modal.scss";

const Modal = props => {
  const ref = useRef();

  useOnClickOutside(ref, () => props.onClickOutside());

  useDisableBodyScroll();


  return (
    <Portal>
      <div className="modal">
        <div className="modal__wrapper" ref={ref}>
          {props.children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
