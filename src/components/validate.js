export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "لطفا ایمیل را وارد کنید";
    // eslint-disable-next-line no-useless-escape
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
    errors.email = "ایمیل معتبر نیست";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "لطفا پسورد را وارد کنید";
  } else if (data.password.length < 6) {
    errors.password = "پسورد باید بیشتر از 6 کارکتر باشد";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "لطفا نام کاربری را وارد کنید";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "لطفا پسورد را تکرار کنید";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "پسور مطاقبت ندارد";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "لطفا قوانین را بپذیرید";
    }
  }

  return errors;
};
