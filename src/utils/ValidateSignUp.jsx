export default function validateAuth(values) {
  let errors = {};
  //email errors
  if (!values.mail) {
    errors.mail = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = "Invalid email address";
  }

  //first name errors
  if (!values.firstName) {
    errors.firstName = "Required.";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Required.";
  }

  //last name errors
  if (!values.lastName) {
    errors.lastName = "Required.";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Required.";
  }

  return errors;
}
