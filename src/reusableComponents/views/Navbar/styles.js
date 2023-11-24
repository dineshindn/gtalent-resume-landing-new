import styled from "styled-components";
// import * as palette from "../../../styles/variables";

export const NavbarStyle = styled.div`
  .navbar {
    padding-top: 25px !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 70px;
    // border-bottom: 1px solid gray;
    .banner-btn{
      margin-left: 0px;
      width: 132px;
      height: 40px;
      font-size: 16px;
      font-weight: 600;
    }
    .banner-btn:hover .btn_text{
      color: blue;

    }
    a {
      text-decoration: none;
      color: inherit; 
    }
    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      img {
        max-height: 60px;
      }
    }

    .anticon {
      font-size: 14px;
      padding-left: 10px;
    }
    .nav-items {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        .Link {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-family: Inter;
          font-size: 16px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: -0.01em;
          color: #0f1629;
          text-decoration-line: blink;
        }
        .Link:last-child {
          margin-right: 0;
        }
      }
      .contact-button {
        margin-left: 20px;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: -0.01em;
        height: auto;
        padding: 16px 40px;
        border-radius: 8px;
        background: #275cbe;
        color: #ffffff;
        margin-left: 35px;
      }
    }
    .nav-items-list li {
      position: relative;
      .UpOutlined {
        display: none;
        transition: 0.35s ease-in-out;
      }
      .DownOutlined {
        transition: 0.35s ease-in-out;
      }
    }
    .dropdown-content {
      position: absolute;
      background: #ffffff;
      top: 20px;
      border: 2px solid #275cbe;
      border-radius: 8px;
      padding: 25px 10px;
      width: 230px;
      z-index: 1;
      transition: 0.35s ease-in-out;
      display: none;
    }
    .dropdown-content ul {
      display: flex;
      flex-direction: column;
    }
    .dropdown-content ul li {
      font-family: Inter;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: -0.01em;
      padding: 16px 0px 16px 8px;
      transition: 0.35s ease-in-out;
    }

    .dropdown-content-list li:hover {
      cursor: pointer;
      color: #275CBE;
      background: #ebf6fa !important;
      padding: 16px 0px 16px 8px;
      border-radius: 8px !important;
    }
 
    .nav-items-list {
      gap: 30px;
    }
    .nav-items-list li {
      display: flex;
      align-items: center;
    }
    .nav-items-list li:hover {
      .UpOutlined {
        display: flex;
      }
      .DownOutlined {
        display: none;
      }
      .dropdown-content {
          display: flex;
          flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 760px) {
    #login-btn{
      background-color: #F2F2F2;
    }
    #mobile-menu .login-links a{

    }
    .logo img {
      width: 110px;
    }
    .navbar {
      padding: 13px 25px 13px 16px;
    }
    #mobile-menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #mobile-menu li {
      margin-bottom: 25px;
    }

    #mobile-menu a {
      text-decoration: none;
      transition: 0.3s ease-in-out;
      font-family: Manrope;
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
      color: #222222;
    }

    #mobile {
      display: block !important;
    }
    .logo {
      display: block !important;
    }
    .navbar .nav-items {
      display: none !important;
    }
  }

  #mobile {
    display: none;
  }
  .navbar .logo .nav-items {
    display: block;
  }

  #mobile-menu {
    width: 100% !important;
    display: block;
    background-color: #ffffff;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 30px 0 0 20px;
    position: fixed;
    top: 70px;
    left: 0px;
    height: 100vh;
    width: 300px;
    z-index: 1000;
  }

  #mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  #mobile-menu li {
    margin-bottom: 20px;
  }
  .faq-answer {
    display: none;
    width: 93.5%;
  }
  .faq-answer ul li {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    padding-bottom: 20px;
    padding-left: 16px;
  }

  .faq.active .faq-answer {
    display: block;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
  }
  .faq.active .nav-accordion {
    border-bottom: none;
  }
  .nav-accordion {
    border: none;
    background: none;
    width: 93.5%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
    align-items: center;
    padding: 15px 8px 15px 16px;
  }
  // .nav-accordion-toggle {
  //   font-size: 24px;
  //   opacity: 70%;
  // }
  .nav-media {
    display: block;
   
  }
  .nav-mobile-menu .banner-btn {
    margin-top: 60px;
    width: 358px;
  }
}

`;
