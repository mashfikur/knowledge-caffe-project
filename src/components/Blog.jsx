import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  return (
    <div className="mt-6 w-[52rem]">
      <img
        className="w-[52rem] rounded-md"
        src={blog.cover_img}
        alt={`cover image for ${blog.title}`}
      />
      <div className="flex  justify-between mt-8">
        <div className="flex gap-6 mb-4">
          <div>
            <img
              className="w-[3rem] h-[3rem]  rounded-full "
              src={blog.author_img}
              alt=""
            />
          </div>
          <div>
            <p className="text-2xl font-bold">{blog.author}</p>
            <p>Published : {blog.posted_date} </p>
          </div>
        </div>
        <div>
          <p> {blog.reading_time} min read</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Title:{blog.title}</h1>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
