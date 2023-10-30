import React, { useEffect } from "react";
import { BannerStyle } from "./styles";
import { Card, Col, Row } from "antd";
import ButtonCompo from "../../../../reusableComponents/views/Button";
import bannerImage from "../../../../../src/assets/home/bannerImages/bannerImages.png";

import { Button, Radio, Space, Divider } from "antd";
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
