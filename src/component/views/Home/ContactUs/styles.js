import styled from "styled-components";
import bg from "../../../../../src/assets/home/hotItWork/bg.png";

export const ContactUsStyle = styled.div`
  .contactUs {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
    background-size: cover;
    // background-color: #fff;
    margin-bottom: 30px;
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #3EB882;
      font-size: 32px;
      font-family: "Caveat";
    }

    h2 {
      font-size: 44px !important;
      text-align: center;
      color: #242a36;
      margin-top: 0px;
      margin-bottom: 0px;
      display: inline-block;
      width: 65%;
    }

    .howtowork-bg{
      background-image: url(${bg});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      text-align: left;
      background-position: center;
      background-position-y: -28px;
      background-position-x: 14px;
      
    }

    .contactForm{
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
      left: 174px;
      top: 267px;
    }

    .heart{
      position: absolute;
      right: 189px;
       
      bottom: 109px;
    }
    }
     
   
  }
`;
