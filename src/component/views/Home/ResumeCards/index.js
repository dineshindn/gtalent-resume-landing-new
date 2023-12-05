import React, { useEffect } from "react";
import { ResumeCardStyle } from "./styles";
import { Card, Col, Row } from "antd";
import { useNavigate  } from 'react-router-dom';
import { Carousel } from 'antd';
import ButtonCompo from "../../../../reusableComponents/views/Button";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
import template1 from '../../../../assets/home/resumeCards/Template 01.svg';
import template2 from '../../../../assets/home/resumeCards/Template 02.svg'
const { Meta } = Card;
const ResumeCards = () => {
  const navigate = useNavigate ();

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

  const handleButtonClick = () => {
    // Navigate to another page, e.g., '/another-page'
    navigate('/signin');
  };
  const scrollToSection = () => {
    const element = document.getElementById('howToMake');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const contentStyle = {
    height: 'auto',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
  };
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
        {/* <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel> */}
      <Row id="carousal-web">
        <Col span={8}>
           <img style={contentStyle} src={template1} alt="Image 1" />
        </Col>
        <Col span={8}>
           <img style={contentStyle} src={template2} alt="Image 1" />
        </Col>
        <Col span={8}>
           <img style={contentStyle} src={template1} alt="Image 1" />
        </Col>
      </Row>
      <Carousel autoplay id="carousal-res">
    <div>
      <img style={contentStyle} src={template1} alt="Image 1" />
    </div>
    <div>
      <img style={contentStyle} src={template2} alt="Image 2" />
    </div>
    <div>
      <img style={contentStyle} src={template1} alt="Image 3" />
    </div>
    <div>
      <img style={contentStyle} src={template2} alt="Image 4" />
    </div>
        </Carousel>

        {/* <Carousel autoplay>
    <div>
        <div style={contentStyle}>
             <img src={template1} alt="" />
        </div> 
    </div>
    <div>
        <div style={contentStyle}>
             <img src={template2} alt="" />
        </div> 
    </div>
    <div>
        <div style={contentStyle}>
             <img src={template1} alt="" />
        </div> 
    </div>
    <div>
        <div style={contentStyle}>
             <img src={template2} alt="" />
        </div> 
    </div>
   
  </Carousel> */}

        <div className="buttons">
          {/* <ButtonCompo text="Sign Up" type="bg-blue-border" icon={false} onClick={() => { window.location.href = 'https://resume.com'; }} /> */}
          {/* <ButtonCompo text="Sign Up" type="bg-blue-border" icon={false} onClick={() => { window.location.href = 'https://resume.com'; }} /> */}
        <Button className="left" type="primary"  shape="round" size="large" onClick={handleButtonClick}>
            Create resume now
          </Button>
          <Button className="right" type="primary" shape="round" size="large"  onClick={scrollToSection}>
            How it works <ArrowRightOutlined />
          </Button>

        </div>

      </div>
    </ResumeCardStyle>
  );
};

export default ResumeCards;
