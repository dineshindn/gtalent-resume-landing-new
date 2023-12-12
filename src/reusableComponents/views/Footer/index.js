import React, { useEffect } from "react";
import { FooterStyle } from "./styles";
import { Col, Row } from "antd";
import { useLocation } from 'react-router-dom'; // Assuming you are using react-router-dom

import footerLogo from "../../../assets/reusableComponents/footer/footer-logo.svg";
import instagram from "../../../assets/reusableComponents/footer/footer-instagram.png";
import facebook from "../../../assets/reusableComponents/footer/footer-facebook.png";
import linkedin from "../../../assets/reusableComponents/footer/footer-linkedin.png";
import twitter from "../../../assets/reusableComponents/footer/footer-twitter.png";
import youtube from "../../../assets/reusableComponents/footer/footer-youtube.png";


import mail from "../../../assets/reusableComponents/footer/mail.png";
import website from "../../../assets/reusableComponents/footer/website.png";
import phone from "../../../assets/reusableComponents/footer/phone.png";
import map from "../../../assets/reusableComponents/footer/map.png";
import time from "../../../assets/reusableComponents/footer/time.png";

import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {

  const location = useLocation();
  const isSignupPage = location.pathname === '/signup';

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <FooterStyle>
      <div className="footer-main">
      <div className="footer">
        <Row>
          <Col
            className="gutter-row"
            span={24} md={5}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div style={{marginTop: '28px'}}>
              <img src={footerLogo} alt=""/>
              <p className="footer-description">
              © 2023 G Talent Pro, INC.
              </p>
            </div>
          </Col>
          <Col
            className="gutter-row home-row"
            span={24} md={6}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div data-aos="fade-down" data-aos-duration="1500">
            <h3>Quick Links</h3>
              <ul className="aLink">
                <li><a href={isSignupPage ? '/#resumeCard' : '#resumeCard'} className="Link">
                Templates
              </a></li>
                <li><a href={isSignupPage ? '/#howToMake' : '#howToMake'} className="Link">
                How it Works
              </a></li>
                <li>  <a href={isSignupPage ? '/#whyus' : '#whyus'} className="Link">
                Why Us
              </a>  </li>
                <li> <a href={isSignupPage ? '/#contactUs' : '#contactUs'} className="Link">
               Contact
              </a>  </li>
                <li><a href={isSignupPage ? '/#faq' : '#faq'} className="Link">
               FAQ
              </a>   </li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row contact-row" span={24} md={7}>
            <div data-aos="fade-down" data-aos-duration="2000">
            <h3>Contact Us</h3>
              <ul>
                <li><img src={phone} alt="phone" /> +91 9513300922</li>
                <li><img src={mail} alt="mail" /> info@gtalentpro.com</li>
                <li><img src={time} alt="time" /> Monday ~ Saturday (9.00 AM - 6.00 PM IST)</li>
                <li><img src={map} alt="map" /> Bangalore , 560066 , Karnataka , India</li>
                <li><img src={website} alt="website" /> www.gtalentpro.com</li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row contact-row" span={24} md={6}>
            <div data-aos="fade-down" data-aos-duration="2000">
            <h3>Follow Us</h3>
            <div className="footer-copyright">
          <div className="footer-links">
            <a href="https://www.instagram.com/gtalentpro/?igshid=1wpe1wf5z95un" target="_blank" data-aos="fade-down" data-aos-duration="1000">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063740934284" target="_blank" data-aos="fade-down" data-aos-duration="1200">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" data-aos="fade-down" data-aos-duration="1400">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/channel/UCrLlZM4azAQIi3wjDLm5cTg/featured" target="_blank" data-aos="fade-down" data-aos-duration="1600">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fapp.gtalentpro.com%2F" target="_blank" data-aos="fade-down" data-aos-duration="1800">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
         <div className="footer-terms"> <p>Privacy Policy</p>
          <p>Terms and Conditions</p></div>
        </div>
            </div>
          </Col>
         
        </Row>
        
      </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
