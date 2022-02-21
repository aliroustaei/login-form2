import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { validate } from "./validate";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
//Context
import { AuthContext } from "../../context/AuthContextProvider";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState({});
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const focusHandler = (e) => {
    setShow({ ...show, [e.target.name]: true });
  };

  const submitHandlerLogin = (e) => {
    e.preventDefault();

    if (!Object.keys(errors).length) {
      axios
        .post("https://api.freerealapi.com/auth/login", {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          setAuth(res.data.token);
          notify("success", "Welcome back");
          navigate("/");
        })
        .catch((err) => {
          notify("error", "Please submit again");
        });
    } else {
      setShow({
        email: true,
        password: true,
      });
      notify("error", "An error has occurred");
    }
  };

  return (
    <div>
      <form
        className={
          props.toggle
            ? `${styles.formContainer2} ${styles.formContainer} `
            : `${styles.formContainer4} ${styles.formContainer} `
        }
        onSubmit={submitHandlerLogin}
      >
        <h2 className={styles.header}>Log In</h2>
        <div>
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
        </div>
        <div className={styles.formButtons}>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
