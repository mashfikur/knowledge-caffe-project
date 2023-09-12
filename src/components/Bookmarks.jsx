import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="text-center  py-6 bg-gray-100 rounded-md mb-6">
        <p className="text-xl text-[#6047EC] font-bold ">
          Spent time on read : {readTime} min
        </p>
      </div>
      <div className="bg-gray-100 p-7">
        <h3 className="text-2xl font-bold text-center">
          Bookmarked Blogs :{bookmarks.length}{" "}
        </h3>
        <div className="text-center space-y-4 mt-4">
          {bookmarks.map((blog, idx) => (
            <p
              key={idx}
              className="text-xl font-semibold bg-white p-5 rounded-md"
            >
              {blog.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number,
};

export default Bookmarks;
