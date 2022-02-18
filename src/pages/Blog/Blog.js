import React from "react";
import BlogList from "../../components/blogList/BlogList";
//styles
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div>
      <div className={styles.blogHeader}>
        <h1>Blog</h1>
      </div>
      <div className="container">
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
