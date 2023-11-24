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
    console.log("12345")
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
              <a href="#resumeCard" className="Link">
                Templates
              </a>
            </li>
            <li>
              <a href="#howToMake" className="Link">
                How it Works
              </a>
            </li>
            <li>
              <a href="#whyus" className="Link">
                Why Us
              </a>      
            </li>
            <li>
              <a href="#contactUs" className="Link">
               Contact
              </a>     
            </li>
            <li>
              <a href="#faq" className="Link">
               FAQ
              </a>     
            </li>
         
          </ul>
          <a href="/signin" alt="link"><ButtonCompo id="login-btn" text="Login" icon={false} /></a>
          <a href="/signup" alt="link"><ButtonCompo text="Sign Up" type="bg-blue-border" icon={false}  /></a>
          
        </div>

        <div id="mobile">
          <div
            id="menu-icon"
            className={menuOpen ? "close-icon" : "bars-icon"}
            onClick={toggleMenu}
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
           <div id="mobile-menu" className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
           <ul>
          <li onClick={toggleMenu}>
              <a href="#resumeCard" className="Link">
                Templates
              </a>
          </li>
          <li onClick={toggleMenu}>
              <a href="#howToMake" className="Link">
                How it Works
              </a>
          </li>
          <li onClick={toggleMenu}>
              <a href="#whyus" className="Link">
                Why Us
              </a> 
          </li>
          <li onClick={toggleMenu}>
              <a href="#contactUs" className="Link">
               Contact
              </a>
          </li>
          <li onClick={toggleMenu}>
              <a href="#faq" className="Link">
               FAQ
              </a> 
          </li>
          {/* Add more mobile menu items as needed */}
        </ul>
        <div className="login-links">
        <a href="/signin" alt="link"><ButtonCompo id="login-btn" text="Login" icon={false} /></a>
        <a href="/signup" alt="link"><ButtonCompo text="Sign Up" type="bg-blue-border" icon={false}  /></a>
        </div> 

        {/* <div className="nav-media">
          <ButtonCompo text="Book a Demo" type="bg-blue-border" onClick={toggleMenu} />
        </div> */}
      </div>
        </>
      )}
    </NavbarStyle>
  );
}

export default Navbar;
