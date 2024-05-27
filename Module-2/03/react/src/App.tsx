import { Route, Routes, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./home";
import About from "./about";

function App() {
  return (
    <>
      <div>
        <Link to="/">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </Link>
        <Link to="/about">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home name="Budi" email="budi@gmail.com" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
