import React, { useEffect } from "react";
import { RegisterStyle } from "./styles";

import { Form, Input, Select, Radio, DatePicker, Upload, Button, Card, Row, Col} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
const { Option } = Select;

const RegisterForm = () => {
  const onFinish = (values) => {
    // Handle form submission here
    console.log("Form values:", values);
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
    <RegisterStyle>
      <div id="register-container" className="register-container">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Fast. Easy. Effective.
          </h1>
          <h2 data-aos="fade-down" data-aos-duration="1300">
            Sign up faster, to choose easy way create resume
          </h2>
        </div>
        <Card className="formCard" >
        <Form
          onFinish={onFinish}
          labelCol={{ span: 12 }}
          layout="vertical"
        >
          <Row gutter={16}>
                <Col span={12}>
          <Form.Item
            name="email"
            label="Tell us your Email ID"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your valid email id" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="username"
            label="Your Full Name *"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="password"
            label="Create a password"
            rules={[{ required: true }]}
          >
            <Input.Password  placeholder="Enter password "/>
          </Form.Item>
          </Col>
          <Col span={12}>
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
            <Input.Password placeholder="Enter password " />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="mobileNo"
            label="Your Phone Number*"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter Phone number" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select>
            <Option value="" selected >Gender</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Others">Others</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
             <Select>
            <Option value="" selected >Nationality</Option>
            <Option value="India">India</Option>
            <Option value="USA">USA</Option>
            
            </Select>
          </Form.Item>
          </Col>
          <Col span={24}>
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
          </Col>
          <Col span={12}>
          <Form.Item
            name="employmentType"
            label="Employment Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="Permanent">Permanent</Option>
              <Option value="Contract">Contract</Option>
              <Option value="Freelance">Freelance</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="passedOutYear"
            label="Passed Out Year"
            rules={[{ required: true }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          </Col>
          <Col span={24}>
          <Form.Item
            name="primarySkills"
            label="Primary Skills"
            rules={[{ required: true }]}
          >
            <Select mode="tags">
              <Option value="skill1">Skill 1</Option>
              <Option value="skill2">Skill 2</Option>
              <Option value="skill3">Skill 3</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
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
          </Col>
          
          <Col span={12}>
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

          </Col>

          <Col span={12}>
          <Form.Item
            name="street1"
            label="Street 1"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter the address"/>
          </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item
            name="street2"
            label="Street "
          >
             <Input placeholder="Enter the street 2"/>
          </Form.Item>
          </Col>



          <Col span={12}>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="pincode" label="Pincode">
            <Input placeholder="Enter the pincode" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="pincode" label="How do you know about us">
          <Select>
              <Option value="degree1">Degree 1</Option>
              <Option value="degree2">Degree 2</Option>
              <Option value="degree3">Degree 3</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
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
          </Col>
         
          
          <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          </Row>
        </Form>
        </Card>
      </div>
    </RegisterStyle>
  );
};

export default RegisterForm;
