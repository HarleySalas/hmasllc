import React from "react";

import "./MailingSection.scss";

import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

import { useFormValidate, ValidateSignUp } from "../../utils";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  mail: ""
};

const MailingSection = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    posted
  } = useFormValidate(INITIAL_STATE, ValidateSignUp, signUp);

  const query = `/wp-json/mailing/v1/post?firstName=${
    values.firstName
  }&lastName=${values.lastName}&email=${values.mail}`;

  function signUp() {
    fetch(query, {
      method: "POST"
    });
  }

  return (
    <section className="mailing">
      <div className="container container--padding-5">
        <div className="mailing__half">
          <div className="mailing__content-wrapper">
            <h2 className="mailing__heading">Join our mailing list!</h2>
            <p className="mailing__content">
              You'll receive updates on tax deadlines, insights, promotional
              offers and more.
            </p>
            <p className="mailing__agreement">
              By providing your email address, you agree to our Privacy Policy
              and Terms of Service.
            </p>
          </div>
        </div>
        <div className="mailing__half">
          <form className="mailing__form" onSubmit={handleSubmit}>
            <div className="mailing__input mailing__input--half">
              <Input
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.firstName}
              />
            </div>
            <div className="mailing__input mailing__input--half">
              <Input
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.lastName}
              />
            </div>
            <div className="mailing__input mailing__input--full">
              <Input
                name="mail"
                placeholder="Email"
                value={values.mail}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.mail}
              />
            </div>
            <Button
              btnText="Join"
              btnStyle="primary"
              btnSize="md"
              addClass="mailing__join"
            />
            {posted && (
              <p className="mailing__posted">
                Success! Thank you for signing up.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default MailingSection;
