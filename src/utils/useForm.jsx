import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;

//USAGE
//IN COMPONENT
//const { values, handleChange, handleSubmit } = useForm(YOUR_SUBMIT_FUNCTION);
//MAKE A FUNCTION
