export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Please enter the email";
    // eslint-disable-next-line no-useless-escape
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "Email is not valid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Please enter the password";
  } else if (data.password.length < 6) {
    errors.password = "Password must be longer than 6 characters";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Please enter the username";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Please enter the password again";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password does not match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Please accept the privacy policy";
    }
  }

  return errors;
};
