import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Navbar from "./components/Navbar";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    const newArray = [...bookmarks, blog];

    setBookmarks(newArray);
  };

  const handleRead = (blog) => {
    let time = blog.reading_time;
    let totalSpentTime = readTime + time;
    setReadTime(totalSpentTime);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="md:flex gap-6 mt-8 container mx-auto">
        <Blogs handleBookmark={handleBookmark} handleRead={handleRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime} ></Bookmarks>
      </div>
    </>
  );
}

export default App;
