import React, { Fragment } from "react";
import Banner from "../../component/views/Home/Banner";
import BannerImages from "../../component/views/Home/BannerImages";
import AboutUs from "../../component/views/Home/aboutUs";
import Footer from "../../reusableComponents/views/Footer";
import Navbar from "../../reusableComponents/views/Navbar";
import HowItWorks from "../../component/views/Home/HowItWorks";
import Templates from "../../component/views/Home/templates";
import Contact from "../../component/views/Home/contact";
import CompanyLogos from "../../component/views/Home/CompanyLogos";
import ResumeCards from "../../component/views/Home/ResumeCards";
import WhyUs from "../../component/views/Home/Whyus";
import OurMission from "../../component/views/Home/OurMission";
import FAQ from "../../component/views/Home/FAQ";
import Reviews from "../../component/views/Home/Review";
import FooterTop from "../../reusableComponents/views/FooterTop";
import ContactUs from "../../component/views/Home/ContactUs";
const HomeMain = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <BannerImages />
      {/* <CompanyLogos /> */}
      <ResumeCards />
      {/* <AboutUs /> */}
      <HowItWorks />
      <WhyUs/>
      <OurMission />
      <Reviews />
      {/* <Templates /> */}
      {/* <Contact /> */}
      <ContactUs />
      <FAQ />
      <FooterTop />
      <Footer />
    </Fragment>
  );
};
export default HomeMain;
