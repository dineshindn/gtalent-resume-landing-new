import React, { Fragment } from "react";
import BannerImages from "../../component/views/Home/BannerImages";
import Footer from "../../reusableComponents/views/Footer";
import Navbar from "../../reusableComponents/views/Navbar";
import FooterTop from "../../reusableComponents/views/FooterTop";
import RegistrationForm from "../../component/views/Register";
const RegisterMain = () => {
  return (
    <Fragment>
      <Navbar />
      <BannerImages />
        <RegistrationForm />
      <FooterTop />
      <Footer />
    </Fragment>
  );
};
export default RegisterMain;
