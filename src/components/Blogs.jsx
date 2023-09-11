import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3" >
      <h3 className="text-3xl">Blogs</h3>
      {blogs.map((blog) => (
        <h1 key={blog.id}>{blog.author}</h1>
      ))}
    </div>
  );
};

export default Blogs;
