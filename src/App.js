import React from "react";
import HomeMain from "./pages/Home";
import RegisterMain from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMain from "./pages/Login";
import JobsMain from "./companies/Pages/Jobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/signup" element={<RegisterMain />} />
        <Route path="/signin" element={<LoginMain />} />


        <Route path="/jobs" element={<JobsMain />} />


        
        {/* Companies Routes */}
        {/* <Route path="/companies" element={<Companies />}>
          <Route index element={<CompanyList />} />
          <Route path="company/:companyId" element={<CompanyDetail />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="jobs" element={<Jobs />} />
        </Route> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
