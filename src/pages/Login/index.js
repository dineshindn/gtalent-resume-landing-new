import React, { Fragment } from "react";
import BannerImages from "../../component/views/Home/BannerImages";
import Footer from "../../reusableComponents/views/Footer";
import Navbar from "../../reusableComponents/views/Navbar";
import FooterTop from "../../reusableComponents/views/FooterTop";
const LoginMain = () => {
  return (
    <Fragment>
      <Navbar />
      <BannerImages />
     
      <FooterTop />
      <Footer />
    </Fragment>
  );
};
export default LoginMain;
