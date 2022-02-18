import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Blog from "../blog/Blog";
import { notify } from "../toast";
//context
import { AuthContext } from "../../context/AuthContextProvider";

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    auth &&
      axios
        .get("https://api.freerealapi.com/blogs")
        .then((res) => {
          setBlog(res.data.blogs);
        })
        .catch(() => notify("error", "Failed to get data from api"));
  }, [auth]);

  return (
    auth && (
      <div className="container mt-3">
        <div className="row justify-content-center">
          {blog.map((item) => (
            <Blog data={item} key={item.title} />
          ))}
        </div>
      </div>
    )
  );
};

export default BlogList;
