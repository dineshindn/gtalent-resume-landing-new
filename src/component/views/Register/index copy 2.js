import React, { useEffect } from "react";
import { RegisterStyle } from "./styles";
import { Card, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Form, Input, Select, Radio, DatePicker, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

import AOS from "aos";
import "aos/dist/aos.css";
const { Meta } = Card;
const RegisterForm = () => {
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
    // Handle form submission here
    console.log('Form values:', values);
  };

  return (
    <RegisterStyle>
      <div id="resumeCard" className="resumeCard">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Fast. Easy. Effective.
          </h1>
          <h2 data-aos="fade-down" data-aos-duration="1300">
            Sign up faster, to choose easy way create resume
          </h2>
        </div>

        <Form
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match.")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="mobileNo"
            label="Mobile No"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="candidateType"
            label="Candidate Type"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="intern">Intern</Radio>
              <Radio value="experience">Experience</Radio>
              <Radio value="fresher">Fresher</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="employmentType"
            label="Employment Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="full-time">Full-Time</Option>
              <Option value="part-time">Part-Time</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="passedOutYear"
            label="Passed Out Year"
            rules={[{ required: true }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          <Form.Item
            name="primarySkills"
            label="Primary Skills"
            rules={[{ required: true }]}
          >
            <Select mode="multiple">
              <Option value="skill1">Skill 1</Option>
              <Option value="skill2">Skill 2</Option>
              <Option value="skill3">Skill 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="qualification"
            label="Qualification"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="bachelor">Bachelor's Degree</Option>
              <Option value="master">Master's Degree</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="degreeName"
            label="Degree Name"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="degree1">Degree 1</Option>
              <Option value="degree2">Degree 2</Option>
              <Option value="degree3">Degree 3</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="fileUpload" label="File Upload">
            <Upload
              name="file"
              action="/upload.do"
              listType="text"
              customRequest={() => {}}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </RegisterStyle>
  );
};

export default RegisterForm;
