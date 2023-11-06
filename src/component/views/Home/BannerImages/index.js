import React, { useEffect } from "react";
import { BannerStyle } from "./styles";
import { Card, Col, Row } from "antd";
import bannerImage from "../../../../../src/assets/home/bannerImages/bannerImages.png";
import AOS from "aos";
import "aos/dist/aos.css";
const { Meta } = Card;
const BannerImages = () => {
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
      <div id="bannerImages" className="bannerImages">
        <img src={bannerImage} alt="" />
      </div>
    </BannerStyle>
  );
};

export default BannerImages;
