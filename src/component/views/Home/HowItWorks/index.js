import React, { useEffect } from "react";
import { HowToMakeStyle } from "./styles";
import { Card, Col, Row, Typography } from "antd";

import one from "../../../../../src/assets/home/hotItWork/1.png";
import bg2 from "../../../../../src/assets/home/hotItWork/bg2.png";
import bg3 from "../../../../../src/assets/home/hotItWork/bg3.png";
import bg4 from "../../../../../src/assets/home/hotItWork/bg4.png";
import bg1 from "../../../../../src/assets/home/hotItWork/bg1.png";
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
            <div className="">
              <img src={bg1} alt="" />
              <h4>Choose a Template</h4>
              <Typography.Paragraph className="text-left">
                Start by selecting a professionally designed template that suits
                your industry and style
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="">
              <img src={bg2} alt="" />
              <h4>Add Your Information</h4>
              <Typography.Paragraph className="text-left">
              Fill in your personal details, work experience, education, skills, and any additional sections relevant to your career
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="">
              <img src={bg3} alt="" />
              <h4>Review and Edit</h4>
              <Typography.Paragraph className="text-left">
              Proof read your resume and make any necessary edits using our user-friendly editor
              </Typography.Paragraph>
            </div>
          </Col>

          <Col span={6} style={{ marginBottom: "20px",marginTop: '55px' }}>
            <div className="">
              <img src={bg4} alt="" />
              <h4>Download and Share </h4>
              <Typography.Paragraph className="text-left">
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
