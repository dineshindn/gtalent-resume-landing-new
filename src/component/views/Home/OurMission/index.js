import React, { useEffect } from "react";
import { OurMissionStyle } from "./styles";
import { Card, Col, Row } from "antd";
import img1 from "../../../../../src/assets/home/ourMission/img1.png";
import img2 from "../../../../../src/assets/home/ourMission/img2.png";
import { Button, Radio, Space, Divider } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
const OurMission = () => {
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
    <OurMissionStyle>
      <div id="ourMission" className="ourMission">
      <Row span={16}>
        <Col span={12} className="our-mission-img">
          <img src={img2} alt="" />
        </Col>
        <Col span={12}>
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
          Discover more
          </h1>
          <h2>Our Mission</h2>
          <p>At G Talent Pro Resume Builder, Our mission is to empower job seekers like you to stand out in a competitive job market. We believe that everyone deserves a chance to pursue their dream career, and a well-crafted resume is the first step towards making that dream a reality</p>
          <Button className="left" type="primary"  shape="round" size="large">
            Create resume now
          </Button>
        </div>
        </Col>
      </Row>
      
      </div>

    </OurMissionStyle>
  );
};

export default OurMission;
