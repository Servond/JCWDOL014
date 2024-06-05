import { Routes, Route } from "react-router-dom";

import LocalStorage from "./localStorage";
import SessionStorage from "./sessionStorage";
import Cookie from "./cookie";
import ReactRedux from "./reactRedux";

function App() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Routes>
          <Route path="/local-storage" element={<LocalStorage />} />
          <Route path="/session-storage" element={<SessionStorage />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/react-redux" element={<ReactRedux />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
