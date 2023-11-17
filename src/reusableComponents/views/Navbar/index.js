import React, { useState } from "react";
import { UpOutlined, DownOutlined, MenuOutlined, CloseOutlined, LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavbarStyle } from "./styles";
import { Link } from "react-router-dom";
import ButtonCompo from "../../../reusableComponents/views/Button";
import logo from "../../../assets/reusableComponents/navbar/logo.svg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function handleClick1() {
    setIsActive1(!isActive1);
  }
  function handleClick2() {
    setIsActive2(!isActive2);
  }
  function handleClick3() {
    setIsActive3(!isActive3);
  }
  function handleClick4() {
    setIsActive4(!isActive4);
  }



  const targetURL = 'https://resume-stag.netlify.app/';

  // Handle the button click event
  const handleClickLogin = () => {
    window.location.href = 'https://resume-stag.netlify.app/';
  };
  const openExternalLink = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab or window
  };

  return (
    <NavbarStyle>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
          <li>
              <a href="#templates" className="Link">
                Templates
              </a>
            </li>
            <li>
              <a href="#work" className="Link">
                How it Works
              </a>
            </li>
            <li>
              <a href="#whyus" className="Link">
                Why Us
              </a>      
            </li>
            
            
            <li>
              <a href="#contact" className="Link">
               Contact
              </a>     
            </li>
            <li>
              <a href="#contact" className="Link">
               FAQ
              </a>     
            </li>
            {/* <li>
              <a href="#" className="Link">
                Login
              </a>     
            </li>
            <li>
              <a href="#" className="Link">
                Register
              </a>     
            </li>
             */}
          </ul>
          {/* <Button className="contact-button">Contact us</Button> */}
          <ButtonCompo id="login-btn" text="Login" icon={false} onClick={() => openExternalLink('https://resume-stag.netlify.app/')} />
          <ButtonCompo text="Sign Up" type="bg-blue-border" icon={false} onClick={() => { window.location.href = 'https://resume.com'; }} />
          
        </div>

        {/* <div id="mobile">
          <div
            id="menu-icon"
            className={menuOpen ? "close-icon" : "bars-icon"}
            onClick={toggleMenu}
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div> */}
      </div>

      {menuOpen && (
        <>
          <div id="mobile-menu" className="nav-mobile-menu">
            <ul>
              <div className={`faq ${isActive1 ? "active" : ""}`}>
                <button className="nav-accordion" onClick={handleClick1}>
                  <li>
                    <Link onClick={toggleMenu} to="/" className="Link">
                      Home
                    </Link>
                  </li>
                  <span className="nav-accordion-toggle">
                    {isActive1 ? <UpOutlined/> : <DownOutlined/>}
                  </span>
                </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>
                </div>
              </div>
              <div className={`faq ${isActive2 ? "active" : ""}`}>
                <button className="nav-accordion" onClick={handleClick2}>
                  <li>
                    <Link to="/services" className="Link">
                      What we do
                    </Link>
                  </li>
                  <span className="nav-accordion-toggle">
                    {isActive2 ? <UpOutlined/> : <DownOutlined/>}
                  </span>
                </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>
                </div>
              </div>
              <div className={`faq ${isActive3 ? "active" : ""}`}>
                <button className="nav-accordion" onClick={handleClick3}>
                  <li>
                    <Link to="/solutions" className="Link">
                      Who we are
                    </Link>
                  </li>
                  <span className="nav-accordion-toggle">
                    {isActive3 ? <UpOutlined/> : <DownOutlined/>}
                  </span>
                </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>
                </div>
              </div>
              <div className={`faq ${isActive4 ? "active" : ""}`}>
                <button className="nav-accordion" onClick={handleClick4}>
                  <li>
                    <Link to="/who" className="Link">
                      Why us
                    </Link>
                  </li>
                  <span className="nav-accordion-toggle">
                    {isActive4 ? <UpOutlined/> : <DownOutlined/>}
                  </span>
                </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>
                </div>
              </div>
            </ul>
            <div className="nav-media">
                <ButtonCompo text="Book a Demo" type="bg-blue-border" />
            
            </div>
          </div>
        </>
      )}
    </NavbarStyle>
  );
}

export default Navbar;
