import React, { useEffect } from "react";
import { HowToMakeStyle } from "./styles";
import { Card, Col, Row, Typography } from "antd";

import bg2 from "../../../../../src/assets/home/hotItWork/bg2.svg";
import bg3 from "../../../../../src/assets/home/hotItWork/bg3.svg";
import bg4 from "../../../../../src/assets/home/hotItWork/bg4.svg";
import bg1 from "../../../../../src/assets/home/hotItWork/bg1.svg";


import AOS from "aos";
import "aos/dist/aos.css";
const HowtoMake = () => {
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
    <HowToMakeStyle>
      <div id="howToMake" className="howToMake">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Quickly and easily build
          </h1>
          <h2 data-aos="fade-down" data-aos-duration="1400">How to make a resume</h2>
        </div>

        <Row
          gutter={16}
          className="howtowork-bg"
           
        >
          <Col xs={24} sm={12} md={6} className="howtowork-card" data-aos="fade-right" data-aos-duration="1000">
            <div className="howtomake-content">
              <img className="bgimg" src={bg1} alt="" />
          
              <h4>Choose a Template</h4>
              <Typography.Paragraph className="text-left htm-para">
                Start by selecting a professionally designed template that suits
                your industry and style
              </Typography.Paragraph>
            </div>
            <div className="mob-dots"></div>
          </Col>

          <Col xs={24} sm={12} md={6} className="howtowork-card" data-aos="fade-down" data-aos-duration="1000">
            <div className="howtomake-content">
            <img className="bgimg" src={bg2} alt="" />
             
              <h4>Add Your Information</h4>
              <Typography.Paragraph className="text-left htm-para">
              Fill in your personal details, work experience, education, skills, and any additional sections relevant to your career
              </Typography.Paragraph>
            </div>
            <div className="mob-dots"></div>
          </Col>

          <Col xs={24} sm={12} md={6} className="howtowork-card"  data-aos="fade-up" data-aos-duration="1000">
            <div className="howtomake-content">
            <img className="bgimg" style={{marginTop: '7px'}} src={bg3} alt="" />
           
              <h4>Review and Edit</h4>
              <Typography.Paragraph className="text-left htm-para">
              Proof read your resume and make any necessary edits using our user-friendly editor
              </Typography.Paragraph>
            </div>
            <div className="mob-dots"></div>
          </Col>

          <Col xs={24} sm={12} md={6} className="howtowork-card"  data-aos="fade-left" data-aos-duration="1000">
            <div className="howtomake-content">
            <img className="bgimg" src={bg4} alt="" />
           
              <h4>Download and Share </h4>
              <Typography.Paragraph className="text-left htm-para">
              Once you're satisfied with your resume, download it in your preferred format and start applying for jobs!
              </Typography.Paragraph>
            </div>
          </Col>
          
        </Row>
      </div>
      <div className="layer1"></div>
      <div className="layer2"></div>
    </HowToMakeStyle>
  );
};

export default HowtoMake;
