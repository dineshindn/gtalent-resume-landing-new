import React, { useEffect } from "react";
import { FooterStyle } from "./styles";
import { Col, Row } from "antd";
import footerLogo from "../../../assets/reusableComponents/footer/footer-logo.png";
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
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <FooterStyle>
      <div className="footer">
        <Row>
          <Col
            className="gutter-row"
            span={6}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div>
              <img src={footerLogo} alt=""/>
              <p className="footer-description">
              © 2023 G Talent Pro, INC.
              </p>
            </div>
          </Col>
          <Col
            className="gutter-row home-row"
            span={6}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <div data-aos="fade-down" data-aos-duration="1500">
            <h3>Quick Links</h3>
              <ul>
                <li>Templates</li>
                <li>How it Works</li>
                <li>Why Us</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
          </Col>
          <Col className="gutter-row contact-row" span={7}>
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
          <Col className="gutter-row contact-row" span={5}>
            <div data-aos="fade-down" data-aos-duration="2000">
            <h3>Follow Us</h3>
            <div className="footer-copyright">
          <div>
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
         <div> <p>Privacy Policy</p>
          <p>Terms and Conditions</p></div>
        </div>
            </div>
          </Col>
         
        </Row>
        
      </div>
    </FooterStyle>
  );
}

export default Footer;
