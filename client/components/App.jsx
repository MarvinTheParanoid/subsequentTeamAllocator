import React from "react";
import { Routes, Route } from "react-router-dom";

//Component imports
import Home from "./Home";
import Nav from "./Navbar";
import NewGroup from "./NewGroup";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group/new" element={<NewGroup />} />
      </Routes>
    </div>
  );
}

export default App;
