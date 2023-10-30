import React, { useEffect, useState } from "react";
import { ContactUsStyle } from "./styles";
import { Input, Form, Button, Row, Col, Select } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import Heart from '../../../../assets/home/contactUs/heart.png';
import Thumb from '../../../../assets/home/contactUs/thumb.png';
import AOS from "aos";
import "aos/dist/aos.css";
const { Option } = Select;
const ContactUs = () => {
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

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <ContactUsStyle>
      <div id="contactUs" className="contactUs">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Get hired faster
          </h1>
          <h2>How can G Talent Pro customer support help you today?</h2>
        </div>
        
        <div className="contactForm">
        <Form name="myForm" onFinish={onFinish}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="username"
                    rules={[
                      { required: true, message: "Please enter your username" },
                      // Add more validation rules as needed
                    ]}
                  >
                    <Input placeholder="Username" style={{ height: '40px' }} />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                      // Add more validation rules for phone number
                    ]}
                  >
                    <Input placeholder="Phone Number"  style={{ height: '40px' }}/>
                  </Form.Item>
                </Col>
              </Row>
                    <img className="thumb" src={Thumb} alt="" />
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  {
                    type: "email",
                    message: "Please enter a valid email address",
                  },
                ]}
              >
                <Input placeholder="Email" style={{ height: '40px' }}/>
              </Form.Item>



              <Form.Item
                name="country"
                rules={[
                  { required: true, message: "Please select your country" },
                ]}
              >
                <Select placeholder="Select a country" style={{ height: '40px' }}>
                  <Option value="usa">United States</Option>
                  <Option value="canada">Canada</Option>
                  {/* Add more country options here */}
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please enter a message" },
                  // Add more validation rules for the message
                ]}
              >
                <Input.TextArea placeholder="Enter message" style={{ height: '120px' }} />
              </Form.Item>
              <img className="heart" src={Heart} alt="" />

              <Row gutter={16}>
                <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Send   <ArrowRightOutlined />
                </Button>
              </Form.Item>

              <p style={{textAlign:"center",}}>We will reply within a span of 48hrs. Advance thanks for your patience</p>
              </Col>
              </Row>
            </Form>
        </div>
          
      </div>
    </ContactUsStyle>
  );
};

export default ContactUs;
