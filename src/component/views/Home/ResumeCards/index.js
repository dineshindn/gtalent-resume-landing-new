import React, { useEffect } from "react";
import { ResumeCardStyle } from "./styles";
import { Card, Col, Row } from "antd";

import ButtonCompo from "../../../../reusableComponents/views/Button";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
const { Meta } = Card;
const ResumeCards = () => {
  
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
    <ResumeCardStyle>
      <div id="resumeCard" className="resumeCard">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
          Fast. Easy. Effective.
          </h1>
          <h2 
          data-aos="fade-down"
          data-aos-duration="1300">Pick a resume template and build your resume in minutes!</h2>
        </div>

        <p
          className="banner-text"
          data-aos="fade-down"
          data-aos-duration="1600"
        >
          G Talent Pro provides a variety of professional templates and formats. Build a simple yet unique resume in no time
        </p>


        <div className="buttons">
          {/* <ButtonCompo text="Sign Up" type="bg-blue-border" icon={false} onClick={() => { window.location.href = 'https://resume.com'; }} /> */}
          {/* <ButtonCompo text="Sign Up" type="bg-blue-border" icon={false} onClick={() => { window.location.href = 'https://resume.com'; }} /> */}
        <Button className="left" type="primary"  shape="round" size="large">
            Create resume now
          </Button>
          <Button className="right" type="primary" shape="round" size="large">
            How it works <ArrowRightOutlined />
          </Button>

        </div>

      </div>
    </ResumeCardStyle>
  );
};

export default ResumeCards;
