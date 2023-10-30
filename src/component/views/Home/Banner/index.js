import React, { useEffect } from "react";
import { BannerStyle } from "./styles";
import { Card, Col, Row } from "antd"; 
import ButtonCompo from "../../../../reusableComponents/views/Button";
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';
import AOS from "aos";
import "aos/dist/aos.css";
const { Meta } = Card;
const Banner = () => {
  
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
    <BannerStyle>
      <div id="banner" className="banner">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Powered by AI
          </h1>
          <h2>  The Resume to Land Your <span id="dream-design"> Dream </span>Job  </h2>
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
    </BannerStyle>
  );
};

export default Banner;
