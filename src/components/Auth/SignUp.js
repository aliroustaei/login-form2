/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";
import styles from "./SignUp.module.css";
import Login from "./Login";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({});
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const focusHandler = (e) => {
    setShow({ ...show, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!Object.keys(errors).length) {
      axios
        .post("https://api.freerealapi.com/auth/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          notify("success", "ُSign up completed successfully");
        })
        .catch(() => notify("error", "Please submit again"));
    } else {
      setShow({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error", "An error has occurred");
    }
  };

  const loginH = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnBox}>
        <div
          className={toggle ? styles.btn : `${styles.btn2} ${styles.btn}`}
        ></div>
        <div className={styles.btnGroup}>
          <button
            className={
              !toggle
                ? `${styles.toggleBtn} ${styles.toggleBtn1} `
                : `${styles.toggleBtn} ${styles.toggleBtn2} `
            }
            onClick={loginH}
          >
            Sign Up
          </button>
        </div>
        <div className={styles.btnGroup}>
          <button
            type="button"
            className={
              toggle
                ? `${styles.toggleBtn} ${styles.toggleBtn1} `
                : `${styles.toggleBtn} ${styles.toggleBtn2} `
            }
            onClick={loginH}
          >
            Log In
          </button>
        </div>
      </div>
      <form
        className={
          toggle
            ? `${styles.formContainer3} ${styles.formContainer} `
            : `${styles.formContainer1} ${styles.formContainer} `
        }
        onSubmit={submitHandler}
      >
        <h2 className={styles.header}>SignUp</h2>
        <div>
          <div className={styles.formField}>
            <label>Name</label>
            <input
              className={
                errors.name && show.name ? styles.uncompleted : styles.formInput
              }
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onKeyUp={focusHandler}
            />
            {errors.name && show.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label>Email</label>
            <input
              className={
                errors.email && show.email
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onKeyUp={focusHandler}
            />
            {errors.email && show.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.formField}>
            <label>Password</label>
            <input
              className={
                errors.password && show.password
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onKeyUp={focusHandler}
            />
            {errors.password && show.password && <span>{errors.password}</span>}
          </div>
          <div className={styles.formField}>
            <label>Confirm Password</label>
            <input
              className={
                errors.confirmPassword && show.confirmPassword
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onKeyUp={focusHandler}
            />
            {errors.confirmPassword && show.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
              <input
                className={styles.checked}
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onKeyUp={focusHandler}
              />
              <label>I accept the privacy policy</label>
            </div>

            {errors.isAccepted && show.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
        </div>
        <div className={styles.formButtons}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <Login toggle={toggle} />
    </div>
  );
};

export default SignUp;
