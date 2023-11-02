import styled from "styled-components";
import bg from "../../../../../src/assets/home/hotItWork/line.svg";

export const HowToMakeStyle = styled.div`
  .howToMake {
    box-shadow: 0px 11px 14px 0px #00000008;
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
    background-size: cover;
    background-color: #fff;
    margin-bottom: 30px;
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #3eb882;
      font-size: 32px;
      font-family: "Caveat";
    }

    h2 {
      font-family: Young Serif;
      font-size: 48px;
      font-weight: 400;
      line-height: 54px;
      text-align: center;
      color: #242a36;
      margin-top: 0px;
      margin-bottom: 0px;
      display: inline-block;
      width: 55%;
    }

    .howtowork-bg {
      background-image: url(${bg});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      text-align: left;
      background-position: center;
      background-position-y: -53px;
      background-position-x: 0px;
    }
    .bgimg {
      position: relative;
    }
    .mainimg1 {
      position: absolute;
      top: 13%;
      left: 15%;
    }
    .mainimg2 {
      position: absolute;
      top: 13%;
      left: 15.5%;
    }
    .mainimg3 {
      position: absolute;
      top: 8%;
      left: 12%;
    }
    .mainimg4 {
      position: absolute;
      top: 13%;
      left: 17%;
    }
    .n1 {
      position: absolute;
      top: -16px;
      left: 33px;
    }
    .n2 {
      position: absolute;
      top: -11px;
      left: 75px;
    }
    .n3 {
      position: absolute;
      top: -10px;
      left: 57px;
    }
    .n4 {
      position: absolute;
      top: -8px;
      left: 46px;
    }
    .howtomake-content h4 {
      font-family: Kanit;
      font-size: 24px;
      font-weight: 400;
      line-height: 54px;
      margin-bottom: 0;
    }
    .htm-para {
      font-family: Kanit;
      font-size: 16px;
      font-weight: 300;
      line-height: 23px;
    }
  }
`;
