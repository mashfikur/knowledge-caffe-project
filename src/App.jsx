import "./App.css";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
