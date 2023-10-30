import React from "react";
import HomeMain from "./pages/Home";
// import ServicesMain from "./pages/Services";
// import SolutionsMain from "./pages/Solutions";
// import WhoweareMain from "./pages/WhoWeAre";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        {/* <Route path="/services" element={<ServicesMain />} />
        <Route path="/solutions" element={<SolutionsMain />} />
        <Route path="/who" element={<WhoweareMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
