import React, { useEffect } from "react";
import { HowToMakeStyle } from "./styles";
import { Card, Col, Row, Typography } from "antd";

import one from "../../../../../src/assets/home/hotItWork/1.png";
import bg2 from "../../../../../src/assets/home/hotItWork/bg2.png";
import bg3 from "../../../../../src/assets/home/hotItWork/bg3.png";
import bg4 from "../../../../../src/assets/home/hotItWork/bg4.png";
import bg1 from "../../../../../src/assets/home/hotItWork/bg1.png";
import main1 from "../../../../../src/assets/home/hotItWork/howtomake1.svg";
import main2 from "../../../../../src/assets/home/hotItWork/howtomake2.svg";
import main3 from "../../../../../src/assets/home/hotItWork/howtomake3.svg";
import main4 from "../../../../../src/assets/home/hotItWork/howtomake4.svg";
import n4 from "../../../../../src/assets/home/hotItWork/num4.svg";
import n3 from "../../../../../src/assets/home/hotItWork/num3.svg";
import n2 from "../../../../../src/assets/home/hotItWork/num2.svg";
import n1 from "../../../../../src/assets/home/hotItWork/num1.svg";
import icon1 from "../../../../../src/assets/home/hotItWork/icon1.png";

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
          <h2>How to make a resume</h2>
        </div>

        <Row
          gutter={16}
          className="howtowork-bg"
          style={{ marginLeft: "0px", marginRight: "0px", marginTop: "30px" }}
        >
          <Col span={6} style={{ marginBottom: "20px", marginTop: '55px' }}>
            <div className="howtomake-content">
              <img className="bgimg" src={bg1} alt="" />
              <img className="mainimg1" src={main1} alt="" />
              <img className="n1" src={n1} alt="" />
              <h4>Choose a Template</h4>
              <Typography.Paragraph className="text-left htm-para">
                Start by selecting a professionally designed template that suits
                your industry and style
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="howtomake-content">
            <img className="bgimg" src={bg2} alt="" />
              <img className="mainimg2" src={main2} alt="" />
              <img className="n2" src={n2} alt="" />
              <h4>Add Your Information</h4>
              <Typography.Paragraph className="text-left htm-para">
              Fill in your personal details, work experience, education, skills, and any additional sections relevant to your career
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="howtomake-content">
            <img className="bgimg" style={{marginTop: '7px'}} src={bg3} alt="" />
              <img className="mainimg3" src={main3} alt="" />
              <img className="n3" src={n3} alt="" />
              <h4>Review and Edit</h4>
              <Typography.Paragraph className="text-left htm-para">
              Proof read your resume and make any necessary edits using our user-friendly editor
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="howtomake-content">
            <img className="bgimg" src={bg4} alt="" />
              <img className="mainimg4" src={main4} alt="" />
              <img className="n4" src={n4} alt="" />
              <h4>Download and Share </h4>
              <Typography.Paragraph className="text-left htm-para">
              Once you're satisfied with your resume, download it in your preferred format and start applying for jobs!
              </Typography.Paragraph>
            </div>
          </Col>
          
        </Row>
      </div>
    </HowToMakeStyle>
  );
};

export default HowtoMake;
