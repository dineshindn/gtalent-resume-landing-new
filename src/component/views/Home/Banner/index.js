import React, { useEffect } from "react";
import { BannerStyle } from "./styles";
import { Card, Col, Row } from "antd"; 
import { useNavigate  } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import { Typewriter } from 'react-simple-typewriter'
import ButtonCompo from "../../../../reusableComponents/views/Button";
import bannerBackground from "../../../../../src/assets/home/banner/banner-background.png";

import AOS from "aos";
import "aos/dist/aos.css";
const { Meta } = Card;
const Banner = () => {
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
  return (
    <BannerStyle>
      <div id="banner" className="banner">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
          <Typewriter
            words={[' Powered by AI']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            // deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
          </h1>
          <h2   
          data-aos="fade-down"
          data-aos-duration="1300">  Perfect Resume to Land Your <span id="dream-design"> Dream </span>Job  </h2>
        </div>

        <p
          className="banner-text"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Showcase your achievements and unique experiences with a stunning
          resume made using G Talent Pro. No experience required
        </p>


        <div className="buttons">
          <Button className="left" type="primary"  shape="round" size="large"  onClick={handleButtonClick} >
            Create resume now
          </Button>
          <Button className="right" type="primary" shape="round" size="large"  onClick={scrollToSection}>
            How it works <ArrowRightOutlined />
          </Button>

        </div>

      </div>
      <img className="bannerBg" src={bannerBackground} alt="bg"/>
    </BannerStyle>
  );
};

export default Banner;
