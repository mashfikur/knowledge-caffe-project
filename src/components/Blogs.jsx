import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmark, handleRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleRead={handleRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleRead: PropTypes.func.isRequired,
};

export default Blogs;
