import React, { forwardRef } from "react";
import "./Button.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faArrowLeft
)

const Button = forwardRef((props, ref) => {
  let btnStyle = `
  button 
  ${props.btnStyle === "primary" && "button--primary"}
  ${props.btnStyle === "black" && "button--black"}
  ${props.btnStyle === "whiteOutline" && "button--white-outline"}
  ${props.btnStyle === "blackOutline" && "button--black-outline"}
  ${props.btnSize === "sm" && "button--sm"}
  ${props.btnSize === "md" && "button--md"}
  ${props.btnSize === "lg" && "button--lg"}
  ${props.addClass && props.addClass}
  `;

  return (
    <button className={btnStyle} onClick={props.onClick} ref={ref}>
      {props.icon &&
        <React.Fragment>
          <FontAwesomeIcon icon={props.icon} size={props.iconSize} style={{ color: props.iconColor }} />
          &nbsp;
        </React.Fragment>
      }
      {props.btnText}
    </button>
  );
});

export default Button;
