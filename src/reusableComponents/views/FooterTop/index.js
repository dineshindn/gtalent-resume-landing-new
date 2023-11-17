import React, { useEffect } from "react";
import { FooterTopStyle } from "./styles";
import { Col, Row } from "antd";
import gtalentTest from "../../../assets/reusableComponents/footer/GTalentPro.svg";
import gtalentTm from "../../../assets/reusableComponents/footer/RR.svg";

import AOS from "aos";
import "aos/dist/aos.css";
function FooterTop() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <FooterTopStyle>
      <div className="footerTop"  data-aos="fade-up"  data-aos-duration="1500">
        <img src={gtalentTest} alt="" className="gtext" />
        <img src={gtalentTm} alt="" className="gtm" />
        {/* <h1>
          G Talent Pro  <span>TM</span>
        </h1> */}
      </div>
    </FooterTopStyle>
  );
}

export default FooterTop;
