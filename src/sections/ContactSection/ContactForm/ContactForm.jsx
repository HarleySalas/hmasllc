import React from "react";
import "./ContactForm.scss";

import Button from "../../../components/Button/Button.jsx";
import Input from "../../../components/Input/Input.jsx";

import { useFormValidate, ValidateContact } from "../../../utils";

const INITIAL_STATE = {
  name: "",
  mail: "",
  phone: "",
  company: "",
  message: ""
};
const ContactForm = () => {
  const {
    handleChange,
    handleChangeNumber,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    posted
  } = useFormValidate(INITIAL_STATE, ValidateContact, sendEmail);

  const url = "/contact/v1/post";

  function sendEmail() {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name: `${values.name}`,
        mail: `${values.mail}`,
        phone: `${values.phone}`,
        company: `${values.company}`,
        message: `${values.message}`
      })
    });
  }
  return (
    <form onSubmit={handleSubmit} className="contact__form">
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.name}
          styles="contact__form__input--bg"
        />
      </div>
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="mail"
          placeholder="Email"
          value={values.mail}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.mail}
          styles="contact__form__input--bg"
        />
      </div>
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="phone"
          placeholder="Phone Number (optional)"
          value={values.phone}
          onChange={handleChangeNumber}
          onBlur={handleBlur}
          errors={errors.phone}
          styles="contact__form__input--bg"
        />
      </div>
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="company"
          placeholder="Company (optional)"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.company}
          styles="contact__form__input--bg"
        />
      </div>
      <div className="contact__form__input contact__form__input--full">
        <Input
          textArea
          name="message"
          placeholder="Message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.message}
          styles="contact__form__input--bg"
        />
      </div>
      <Button
        btnText="Send"
        btnStyle="primary"
        btnSize="md"
        addClass="contact__form__submit"
      />
    </form>
  );
};

export default ContactForm;
