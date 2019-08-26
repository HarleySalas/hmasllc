import React, { useState, useEffect } from "react";

function useFormValidate(initialState, validate, callback) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        callback();
        setSubmitting(false);
        setValues(initialState);
        setPosted(true);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleChangeNumber = event => {
    const re = /^[0-9\b]+$/;
    event.persist();
    if (event.target.value === "" || re.test(event.target.value)) {
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
      }));
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setPosted(false);
    setSubmitting(true);
  };

  return {
    handleChange,
    handleChangeNumber,
    handleBlur,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    posted
  };
}

export default useFormValidate;
