import React from "react";
import styles from "./LoginPage.module.css";
import SignUp from "../../components/Auth/SignUp";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
};

export default LoginPage;
