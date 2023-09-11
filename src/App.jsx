import "./App.css";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:flex container mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
