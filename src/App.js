import React from "react";
import HomeMain from "./pages/Home";
import RegisterMain from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signup" element={<RegisterMain />} />
        <Route path="/signin" element={<LoginMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
