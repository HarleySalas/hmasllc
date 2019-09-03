import React from "react";
import axios from 'axios';
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

  function sendEmail() {
    const url = "/wp-json/contact/v1/post";

    const body = {
      name: `${values.name}`,
      mail: `${values.mail}`,
      phone: `${values.phone}`,
      company: `${values.company}`,
      message: `${values.message}`
    }

    axios.post(url, body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
        />
      </div>
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="phone"
          placeholder="Phone Number"
          value={values.phone}
          onChange={handleChangeNumber}
          onBlur={handleBlur}
          errors={errors.phone}
        />
      </div>
      <div className="contact__form__input contact__form__input--half">
        <Input
          name="company"
          placeholder="Company"
          value={values.company}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.company}
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
        />
      </div>
      <Button
        btnText="Send"
        btnStyle="primary"
        btnSize="md"
        addClass="contact__form__submit"
      />
      {posted && <div className="contact__form__posted">Success! We'll respond to you shortly.</div>}
    </form>
  );
};

export default ContactForm;
