export default function validateAuth(values) {
  let errors = {};
  //Name
  if (!values.name) {
    errors.name = "Required.";
  } else if (values.name.length < 2) {
    errors.name = "Required.";
  }

  //email errors
  if (!values.mail) {
    errors.mail = "Required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
    errors.mail = "Invalid email address";
  }

  //Phone errors
  if (values.phone.length < 9 && values.phone.length > 0) {
    errors.phone = "Please make sure to include your areacode.";
  } else if (values.phone.length > 11) {
    errors.phone = "Your phone number containers too many numbers.";
  }

  //Message errors
  if (!values.message) {
    errors.message = "Required.";
  } else if (values.message.length < 20) {
    errors.message = "Your message should contain at least 20 characters.";
  }

  return errors;
}
