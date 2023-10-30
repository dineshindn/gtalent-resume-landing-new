import React, { useEffect } from "react";
import { CompanyLogoStyle } from "./styles";
import logo1 from "../../../../../src/assets/home/companyLogos/logo1.png";
import logo2 from "../../../../../src/assets/home/companyLogos/logo2.png";
import logo3 from "../../../../../src/assets/home/companyLogos/logo3.png";
import logo4 from "../../../../../src/assets/home/companyLogos/logo4.png";
import logo5 from "../../../../../src/assets/home/companyLogos/logo5.png";

import AOS from "aos";
import "aos/dist/aos.css";
const CompanyLogos = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <CompanyLogoStyle>
      <div id="CompanyLogos" className="CompanyLogos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
    </CompanyLogoStyle>
  );
};

export default CompanyLogos;
