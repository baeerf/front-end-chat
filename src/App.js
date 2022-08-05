import { useNavigate, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/homepage";
import { useState } from "react";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginPage />} />{" "}
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
