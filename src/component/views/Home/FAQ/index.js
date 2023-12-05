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
    label: "What is a G Talent Pro resume maker?",
    children: <p>G Talent Pro resume maker is an Online tool that helps you create a professional resume. These tools typically provide a variety of templates and prompts to help you fill in your information, also offer features such as keyword optimization and spell checking.</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "What is this website for?",
    children: <p>This website helps you create a professional resume quickly and easily. We offer a variety of templates, prompts, and tools to help you highlight your skills and experience.</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "How much does it cost to use your website?",
    children: <p>We offer both free and paid plans. The free plan gives you access to a limited number of templates and features. The paid plan gives you access to all of our templates and features, including keyword optimization, spell checking, and cover letter templates and much more.</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "Do I need to create an account to use G Talent Pro Resume?",
    children: <p>Yes, you need to create an account to use our website. However, creating an account allows you to save your resume progress and access it for future.</p>,
    style: panelStyle,
  },
  {
    key: "5",
    label: "How do I get started?",
    children: <p>Click the "Start Building Your Resume" button on the homepage. You will be prompted to enter your basic information, such as your name, contact information, and education.</p>,
    style: panelStyle,
  },
  {
    key: "6",
    label: "How do I choose a template?",
    children: <p>We offer a variety of templates to choose from, each with its own unique design and layout. We recommend browsing the templates and choosing one that best fits your needs and career goals.</p>,
    style: panelStyle,
  },
  {
    key: "7",
    label: "How do I add my information to the template?",
    children: <p>Simply click on the appropriate section of the template and start updating the information in the left in case if you Laptop/desktop. We provide prompts and examples to help you fill in the information.</p>,
    style: panelStyle,
  },
  {
    key: "8",
    label: "How do I customize the G Talent Pro template?",
    children: <p>You can customize the G Talent Pro template by changing the font, colors, and layout. You can also add sections and remove sections that you don't need.</p>,
    style: panelStyle,
  },
  {
    key: "9",
    label: "Can I save my resume progress?",
    children: <p>Yes, you can save your resume progress by creating an account or logging in if you already have one. This allows you to continue working on your resume at your own pace.</p>,
    style: panelStyle,
  },
  {
    key: "10",
    label: "Can I download my resume as a PDF?",
    children: <p>Yes, you can download your resume as a PDF for free. </p>,
    style: panelStyle,
  },
  {
    key: "11",
    label: "Can you help me get pass Applicant Tracking Systems (ATS)?",
    children: <p>Yes, our website provides a variety of features that can help you get pass ATS, such as keyword optimization and a ATS-compatible resume format.</p>,
    style: panelStyle,
  },
  {
    key: "12",
    label: "How can I find job opportunities?",
    children: <p>G Talent Pro Career Portal can help you find job opportunities, for Interns , Freshers, Laterals, Executives and Educators across various Industries verticals. Once you updated your resume, you can apply for your Dream Job.</p>,
    style: panelStyle,
  },
  {
    key: "13",
    label: "What additional benefits, I can get from the G Talent Pro?",
    children: <p>Career Consulting, Interview Preparations, upskilling to achieve your dream jobs.</p>,
    style: panelStyle,
  },
  {
    key: "14",
    label: "Is my information safe with G Talent Pro?",
    children: <p>Yes, your information is safe with us. We use industry-standard security measures to protect your data.</p>,
    style: panelStyle,
  },
  {
    key: "15",
    label: "How G Talent Pro Resume is Different from other Resume Builder?",
    children: <p>We provide features to share and track your resume views and it’s a global resume which you can share with one click.</p>,
    style: panelStyle,
  },
  {
    key: "16",
    label: "How do I refer my Friend to Use G Talent Pro?",
    children: <p>You can refer your friend by click  on “Refer a Friend” and avail referral bonus. </p>,
    style: panelStyle,
  },
  {
    key: "17",
    label: "How do I claim the Bonus Points?",
    children: <p>The Bonus points can avails as a Training Credits to Upskill your knowledge or Unlock Premium features or Convert to Amazon Coupon More details details available in your referral dashboard.</p>,
    style: panelStyle,
  },
  {
    key: "18",
    label: "How To make my Resume Good and select.",
    children: <p>Select the Template you like and update the maximum information for the optimum output as well for better selection criteria</p>,
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
          <Col xs={24} sm={24} md={24}>
            <div className="heading">
              <h1 data-aos="fade-down" data-aos-duration="1000">
                Answers to
              </h1>
              <h2 data-aos="fade-right"  data-aos-duration="1500">Resume Generator FAQs</h2>
            </div>
          </Col>
          <Col  xs={24} sm={24} md={24}>
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

          <Col xs={24} sm={24} md={24}>
              <h5 style={{textAlign: "center"}}>By following these tips, you can use a G Talent Pro resume maker website to create a professional resume and increase your chances of landing your dream job.</h5>
          </Col>
        </Row>
      </div>
    </FAQStyle>
  );
};

export default FAQ;
