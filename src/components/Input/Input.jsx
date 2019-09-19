import React, { Fragment } from "react";

import "./Input.scss";

const Input = props => {
  return (
    <Fragment>
      <label htmlFor={props.name} className="input__label"
        ariaLabel={props.name}
      >
        {props.placeholder}
      </label>
      {props.textArea && (
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          className={`input input__textarea ${props.styles}`}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          rows="5"
        />
      )}
      {!props.textArea && (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          autoComplete="nope"
          className={`input ${props.styles}`}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      )}

      <div
        className={`input__underline ${props.errors &&
          "input__underline--error"}`}
      />
      {props.errors && <p className="input__error">{props.errors}</p>}
    </Fragment>
  );
};

export default Input;
