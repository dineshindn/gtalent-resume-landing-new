import React, { useEffect, useState } from "react";
import { WhyUsStyle } from "./styles";
import { Card, Col, Row, Typography, Tag } from "antd";
import userIcon from "../../../../../src/assets/home/whyUs/Frame1.png";
import Frame2 from "../../../../../src/assets/home/whyUs/Frame2.png";
import Frame3 from "../../../../../src/assets/home/whyUs/Frame3.png";
import Frame4 from "../../../../../src/assets/home/whyUs/Frame4.png";
import Frame5 from "../../../../../src/assets/home/whyUs/Frame5.png";
import Frame6 from "../../../../../src/assets/home/whyUs/Frame6.png";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyUs = () => {
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

  const data = [
    {
      id:1,
      img:userIcon,
      title:'User-Friendly Interface',
      text:'Our intuitive and user-friendly platform makes it easy for you to create a professional resume in just a few simple steps. No design or formatting skills required!',
      class:'fade-right'
    },
    {
      id:2,
      img:Frame2,
      title:'Customization Options',
      text:'Tailor your resume to your unique career goals. Our builder allows you to choose from a variety of templates and customize them to reflect your personal brand.',
      class:'fade-down'
    },
    {
      id:3,
      img:Frame3,
      title:'Content Guidance',
      text:'Not sure what to include in your resume? Our builder offers expert tips and suggestions for each section, ensuring you to highlight your strengths effectively.',
      class:'fade-up'
    },
    {
      id:4,
      img:Frame4,
      title:'Real-Time Previews',
      text:'See how your resume will look as you build it. Get instant feedback and make changes on the go.',
      class:'fade-right'
    },
    {
      id:5,
      img:Frame5,
      title:'Download and Share',
      text:'Once your resume is ready, download it in various formats, such as PDF or Word, and share it with potential employers.',
      class:'fade-up'
    },
    {
      id:6,
      img:Frame6,
      title:'Encryption & Tracking',
      text:'Encrypted, Secure Share, Restrict access, track views and analysis.',
      class:'fade-left'
    } 
  ];

  const [datas, setDatas]= useState(data)
  console.log(datas)
  return (
    <WhyUsStyle>
      <div id="whyus" className="whyus">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Get hired faster
          </h1>
          <h2> Why G Talent Pro ? </h2>
        </div>

        <Row gutter={[16, 16]} style={{ marginLeft:"0px", marginRight: "0px", marginTop:'30px'}}>
        {data.map((item) => (
        <Col xs={24} sm={12} md={8}  key={item.id} style={{marginBottom: '20px'}} data-aos={item.class}  data-aos-duration="1500">
          <Card bordered={false} className="element">
            <div className="cardBody">
              <img src={item.img} alt="" />
              <h4>{item.title}</h4>
            </div>
            <Typography.Paragraph className="text-left cardbody-text">{item.text}</Typography.Paragraph>
          </Card>
        </Col>
      ))}
        </Row>
      </div>
    </WhyUsStyle>
  );
};

export default WhyUs;
