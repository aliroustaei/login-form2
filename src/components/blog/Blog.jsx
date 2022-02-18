import React from "react";
import { Link } from "react-router-dom";
//styles
import styles from "./blog.module.css";

const Blog = ({ data }) => {
  const dateUpload = (date) => {
    let newdate = date.slice(0, 10);
    return newdate;
  };

  return (
    <div className={styles.blog}>
      <div className={styles.imgBox}>
        <div className={styles.imgBoxLiner}></div>
        <h3>{data.title}</h3>
        <div className={styles.blogInfo}>
          <div>
            <i className="bi bi-person-fill"></i>
            <p>{data.user.name}</p>
          </div>
          <div>
            <i className="bi bi-calendar-fill"></i>
            <p>{dateUpload(data.createdAt)}</p>
          </div>
        </div>
        <img src={data.image} alt="" />
      </div>
      <div className={styles.blogText}>
        <p>{data.text}</p>
        <small>
          <Link to="/">Read More ...</Link>
        </small>
      </div>
    </div>
  );
};

export default Blog;
