import React, { useEffect } from "react";
import { FooterTopStyle } from "./styles";
import { Col, Row } from "antd";

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
      <div className="footerTop">
        <h1>
          G Talent Pro  <span>TM</span>
        </h1>
      </div>
    </FooterTopStyle>
  );
}

export default FooterTop;
