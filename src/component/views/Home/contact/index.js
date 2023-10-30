import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "antd";
import gtalent from "../../../../assets/home/contact/gtalentpro-logo.png";
import fb from "../../../../assets/home/contact/facebook.png";
import linked from "../../../../assets/home/contact/linkedin.png";
import yt from "../../../../assets/home/contact/youtube.png";
import insta from "../../../../assets/home/contact/instagram.png";
import tele from "../../../../assets/home/contact/telegram.png";
import ButtonCompo from "../../../../reusableComponents/views/Button";
import { ContactStyle } from "./styles.js";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ContactStyle>
      <div id="contact" className="contact">
        <Row>
          <Col span={14}>
            <h1 className="contact-head" data-aos="fade-up" data-aos-duration="1600">Contact G Talent Pro</h1>
            <p className="newp"> Our dedicated support team is here to assist you with any questions or concerns. </p>
            <form data-aos="fade-up" data-aos-duration="1800">
              <Row gutter={40}>
                <Col span={12}>
                  <label htmlFor="jobtitle">Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col span={12}>
                  <label htmlFor="jobtitle">Your Email*</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row gutter={40}>
                <Col span={12}>
                  <label htmlFor="jobtitle">Your Phone No*</label>
                  <input
                    type="number"
                    id="name"
                    placeholder="Enter Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
                <Col span={12} style={{ paddingRight: "0px" }}>
                  <label htmlFor="request">Request Type*</label>
                  {/* <input type="text" id="name" placeholder='Select Your Request Type'  value={request} onChange={(e) => setRequest(e.target.value)} /> */}
                  <select
                    name="cars"
                    id="request"
                    onChange={(e) => setRequest(e.target.value)}
                  >
                    <option value="Select Your Request Type">
                      Select Your Request Type
                    </option>
                    <option value="jobs">Jobs</option>
                    <option value="Talent Requirement">
                      Talent Requirement
                    </option>
                    <option value="Placement Service">Placement Service</option>
                    <option value="Job Posting">Job Posting</option>
                    <option value="Events">Events</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label htmlFor="jobtitle">Message*</label>
                  <textarea
                    type="text"
                    id="name"
                    placeholder="Message"
                    style={{ height: "55px" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
              </Row>
              <div
                style={{
                  float: "right",
                  marginRight: "-21px",
                  marginTop: "12px",
                  marginBottom: "30px",
                }}
              >
                {/* <button className='choose-btn' style={{marginBottom: '20px'}}>Submit</button> */}
                <ButtonCompo
                  text="Submit"
                  style={{ marginBottom: "20px" }}
                  type="bg-blue-border"
                  icon={false}
                />
              </div>
            </form>
          </Col>
          <Col span={10} className="contact-right" data-aos="fade-left" data-aos-duration="1600">
            <img className="contact-img" src={gtalent} alt="gtalent" />
            <h6>Follow Us</h6>
            <div style={{ marginBottom: "10px" }}>
              <img src={fb} alt="gtalent" />
              <img src={linked} alt="gtalent" />
              <img src={yt} alt="gtalent" />
              <img src={insta} alt="gtalent" />
            </div>
            <h6>Join Our Telegram Channel</h6>
            <img src={tele} alt="gtalent" />
          </Col>
        </Row>
        {/* <div className='row col-md-12'>
            <div className='col-md-7'>
                <h3 className='contact-head'>Contact G Talent Pro</h3>
                <form>
                    <div className='row col-md-12'>
                       <div className='col-md-6'>
                        <label htmlFor="jobtitle">Your Name*</label>
                        <input type="text" id="name" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                       </div>
                       <div className='col-md-6'>
                        <label htmlFor="jobtitle">Your Email*</label>
                        <input type="text" id="name" placeholder='Enter Your Email' value={mail} onChange={(e) => setMail(e.target.value)} />
                       </div>
                    </div>
                    <div className='row col-md-12'>
                       <div className='col-md-6'>
                        <label htmlFor="jobtitle">Your Phone No*</label>
                        <input type="number" id="name" placeholder='Enter Your Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                       </div>
                       <div className='col-md-6'>
                        <label htmlFor="request">Request Type*</label>
                        <select name="cars" id="request" onChange={(e) => setRequest(e.target.value)}>
                             <option value="Select Your Request Type">Select Your Request Type</option>
                             <option value="jobs">Jobs</option>
                             <option value="Talent Requirement">Talent Requirement</option>
                             <option value="Placement Service">Placement Service</option>
                             <option value="Job Posting">Job Posting</option>
                             <option value="Events">Events</option>
                       </select>
                       </div>
                    </div>
                    <div className='row col-md-12'>
                       <div className='col-md-12'>
                        <label htmlFor="jobtitle">Message*</label>
                        <textarea type="text" id="name" placeholder='Message'  value={message} onChange={(e) => setMessage(e.target.value)} />
                       </div>
                    </div>
                    <div>
                        <button className='choose-btn' style={{marginBottom: '20px'}}>Submit</button>
                    </div>
                </form>
            </div>
            <div className='col-md-5 contact-right'>
               <img className='contact-img' src={gtalent} alt="gtalent" />
               <h6>Follow Us</h6>
               <div style={{marginBottom: '25px'}}>
                  <img src={fb} alt="gtalent" />
                  <img src={linked} alt="gtalent" />
                  <img src={yt} alt="gtalent" />
                  <img src={insta} alt="gtalent" />
               </div>
               <h6>Join Our Telegram Channel</h6>
               <img src={tele} alt="gtalent" />
            </div>
        </div> */}
      </div>
    </ContactStyle>
  );
}

export default Contact;
