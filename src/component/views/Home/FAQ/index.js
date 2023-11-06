import React, { useEffect } from "react";
import { FAQStyle } from "./styles";
import { Card, Col, Row } from "antd";
import img1 from "../../../../../src/assets/home/ourMission/img1.png";
import img2 from "../../../../../src/assets/home/ourMission/img2.png";
import { Button, Radio, Space, Divider, Collapse, theme } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { CaretRightOutlined } from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What is a resume generator?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "How do I use a resume generator?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "What are the benefits of using a resume generator?",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const FAQ = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

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
 
  const CustomExpandIcon = ({ isActive }) => (
    <span className={`custom-expand-icon ${isActive ? 'minus' : 'plus'}`}>
      {isActive ? '-' : '+'}
    </span>
  );

  return (
    <FAQStyle>
      <div id="faq" className="faq">
        <Row span={16}>
          <Col xs={24} sm={24} md={6}>
            <div className="heading">
              <h1 data-aos="fade-down" data-aos-duration="1000">
                Answers to
              </h1>
              <h2 data-aos="fade-right"  data-aos-duration="1500">Resume Generator FAQs</h2>
            </div>
          </Col>
          <Col  xs={24} sm={24} md={18}>
            <Collapse
             className="custom-collapse"
              bordered={false}
              // defaultActiveKey={["1"]}
              expandIcon={CustomExpandIcon}
              expandIconPosition= "end"
              style={{
                background: token.colorBgContainer,
              }}
              items={getItems(panelStyle)}
            />
          </Col>
        </Row>
      </div>
    </FAQStyle>
  );
};

export default FAQ;
