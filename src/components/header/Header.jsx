import React from "react";
import classNames from "classnames";
//Styles
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={classNames("container")}>
        <div className={styles.headerTitle}>
          <h1>Sign up to see our content</h1>
          <div className={styles.headerBtn}>
            <button className={styles.BtnSign}>
              <Link to="/login">Sign up</Link>
            </button>
            <button className={styles.BtnLog}>
              <Link to="/login">Log in</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
