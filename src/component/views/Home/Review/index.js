import React, { useEffect } from "react";
import { ReviewStyle } from "./styles";
import { Card, Col, Row } from "antd";
import img1 from "../../../../../src/assets/home/review/review1.png";
import { Button, Radio, Space, Divider } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
const Reviews = () => {
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
    <ReviewStyle>
      <div id="review" className="review">
      <Row span={16}>
        
        <Col span={16}>
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
          Creation Made Easy
          </h1>
          <h2>The faster, easier way to create resume</h2>
          <p>Jump in today and see how easy it is to create testimonials with G Talent Pro</p>
          <Button className="left" type="primary"  shape="round" size="large">
            Create resume now
          </Button>
        </div>
        </Col>

        <Col span={8}>
          <img src={img1} alt="" />
        </Col>
      </Row>
      
      </div>

    </ReviewStyle>
  );
};

export default Reviews;
