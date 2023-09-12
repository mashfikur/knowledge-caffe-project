import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Navbar from "./components/Navbar";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const newArray = [...bookmarks, blog];

    setBookmarks(newArray);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="md:flex gap-6 mt-8 container mx-auto">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
