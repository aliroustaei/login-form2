import React, { useContext } from "react";
import styles from "./Topbar.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
//context
import { AuthContext } from "../../context/AuthContextProvider";

const Topbar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div className={classNames(styles.topbar)}>
      <div className={classNames("container")}>
        <div className={classNames("navbar")}>
          <div className={classNames("navbar-nav")}>
            <span className={styles.logo}>BlogZin</span>
          </div>
          <div className={classNames("navbar-nav")}>
            <ul className={classNames("navbar-nav")}>
              <li className={classNames("nav-item", styles.navHover)}>
                <Link to="/">Home</Link>
              </li>
              <li className={classNames("nav-item", styles.navHover)}>
                <Link to="/blog">Blog</Link>
              </li>
              {auth ? (
                <li className={classNames("nav-item", styles.userBtn)}>
                  <Link to="/">
                    <i className="bi bi-person-circle"></i>
                  </Link>
                </li>
              ) : (
                <li className={classNames("nav-item", styles.loginBtn)}>
                  <Link to="/login">Log In</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
