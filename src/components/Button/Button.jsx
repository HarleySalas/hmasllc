import React from "react";
import "./Button.scss";

const Button = props => {
  let btnStyle = `
  button 
  ${props.btnStyle === "primary" ? "button--primary" : ""}
  ${props.btnStyle === "black" ? "button--black" : ""} 
  ${props.btnSize === "sm" ? "button--sm" : ""}
  ${props.btnSize === "md" ? "button--md" : ""}
  ${props.btnSize === "lg" ? "button--lg" : ""}
  ${props.addClass ? props.addClass : ""}
  `;

  return (
    <button
      className={btnStyle}
      onClick={props.onClick}
      onClick={props.onClick}
    >
      {props.btnText}
    </button>
  );
};

export default Button;
