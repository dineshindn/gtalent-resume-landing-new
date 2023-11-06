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
      <div className="review-mainpart">
      <div id="review" className="review">
      <Row span={16}>
        
        <Col xs={24} sm={24} md={16} style={{paddingLeft: '45px'}}>
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

       
      </Row>
      
      </div>
      <img className="review-img" src={img1} alt="" />
      </div>

    </ReviewStyle>
  );
};

export default Reviews;
