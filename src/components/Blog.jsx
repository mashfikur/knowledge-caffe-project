import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  return (
    <div className=" mb-10 pb-10 border-b-2  w-[52rem]">
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
          <p className="flex items-center gap-2">
            {" "}
            {blog.reading_time} min read{" "}
            <ion-icon
              name={blog.reading_time > 6 ? "bookmark" : "bookmark-outline"}
            ></ion-icon>{" "}
          </p>
        </div>
      </div>
      <h1 className="text-4xl mb-4 font-bold">{blog.title}</h1>
      <div>
        {blog.hashtags.map((hash) => (
          <span className="mx-1 text-gray-500">#{hash}</span>
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
