import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h3 className="text-3xl text-center">Bookmarks :{bookmarks.length} </h3>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
