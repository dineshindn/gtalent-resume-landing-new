import styled from "styled-components";
import bg from "../../../../../src/assets/home/hotItWork/bg.png";

export const ContactUsStyle = styled.div`
  .contactUs {
    background-color: #F3F4F6;
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
    background-size: cover;
    // margin-bottom: 150px;
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #3EB882;
      font-size: 32px;
      font-family: "Caveat";
    }
    h2 {
      font-family: Young Serif;
font-size: 52px;
font-weight: 400;
line-height: 54px;
      text-align: center;
      color: #242a36;
      margin-top: 10px;
      margin-bottom: 0px;
      display: inline-block;
      width: 90%;
    }
    .howtowork-bg{
      background-image: url(${bg});
      background-size: 100% 85%;
      background-repeat: no-repeat;
      position: relative;
      text-align: left;
      background-position: center;
      background-position-y: -28px;
      background-position-x: 14px;
      
    }

    .contactForm{
      position: relative;
      z-index: 2; /* Place the form on top of other elements */
      width: 50%;
    display: inline-block;
    background: #fff;
    padding: 30px;
    margin-top: 18px;
    border-radius: 30px;
    text-align: left;
    .custom-select .ant-select-selector {
      height: 40px !important; /* Change the height as needed */
    }
    .thumb{
      position: absolute;
      left: -108px;
      top: 47px;
    }
    }  
    .heart-container {
      position: absolute;
      right: 167px;
      bottom: 112px;
      z-index: 1; /* Place the image behind the form */
      overflow: hidden; /* Hide overflowing parts of the image */
    }
  }
 
  
  /* Media Query for Mobile */
@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 24px!important;
    line-height: 1.3 !important;
    width: 100% !important;
  }
  .contactUs .contactForm{
    width: 92% !important;
  }
  
}

`;
