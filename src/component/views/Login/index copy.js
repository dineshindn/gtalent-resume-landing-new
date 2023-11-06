import React, { useEffect } from "react";
import { LoginStyle } from "./styles";

import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  Checkbox,
  Carousel,
  Radio
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/login/img1.svg";
import logo from "../../../assets/reusableComponents/navbar/gtalentpro-logo.png";
const LoginForm = () => {
  const onFinish = (values) => {
    // Handle form submission here
    console.log("Form values:", values);
  };

  const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
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

  return (
    <LoginStyle>
      <div id="register-container" className="register-container">
        <Card className="formCard">
          <Row span={16}>
            <Col span={12}>
              <img src={logo} alt="" />
              <h1
                className="subTitle"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                Account
              </h1>
              <h2
                className="title"
                data-aos="fade-down"
                data-aos-duration="1300"
              >
                Sign in to your account
              </h2>
              <p>Enter your credentials to view all insights</p>

              <Form name="login" onFinish={onFinish}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Invalid email format" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject("Please accept the agreement"),
                    },
                  ]}
                >
                  <Checkbox>
                    I agree to the{" "}
                    <a href="#">G Talent Pro Privacy Statement </a> and{" "}
                    <a href="#">Terms of Service</a>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Form.Item>
                <p>Don’t have an account Sign up now</p>
              </Form>
            </Col>
            <Col span={12}>
            <Carousel afterChange={onChange}>
      <div>
      <img src={img1} alt="" />
              <div className="hovers">
                <div className="section">
                  <h1 className="subTitle">Sign up</h1>
                  <h2 className="title">Get hired into your dream job</h2>
                  <p>
                    Creating effective content for a sign-up page is crucial for
                    encouraging users to register and engage with your platform
                  </p>
                </div>
              </div>
      </div>
      <div>
      <img src={logo} alt="" />
              <div className="hovers">
                <div className="section">
                  <h1 className="subTitle">Sign up</h1>
                  <h2 className="title">Get hired into your dream job</h2>
                  <p>
                    Creating effective content for a sign-up page is crucial for
                    encouraging users to register and engage with your platform
                  </p>
                </div>
              </div>
      </div>
      
    </Carousel>

              
            </Col>
          </Row>
        </Card>
      </div>
    </LoginStyle>
  );
};

export default LoginForm;
