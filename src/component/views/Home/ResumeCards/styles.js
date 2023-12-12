import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import dreams from "../../../../../src/assets/home/banner/dreams.png";
import bannerBackground from "../../../../../src/assets/home/banner/banner-background.png";

export const ResumeCardStyle = styled.div`
  .resumeCard {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
    .ant-row{
      padding: 0 75px;
      display: flex !important;
    }
    .ant-col-8{
      padding: 0 10px;
    }
    #carousal-res{
      display: none;
    }
    #carousal-web{
      display: block;
    }
    .ant-carousal{
      width: 30%;
      margin-left: auto;
      margin-right: auto;
    }
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #353fa7;
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
      span {
        background-image: url(${dreams});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
      }
    }

    .banner-text {
      font-family: "Kanit", sans-serif;
      font-size: 20px;
      display: inline-block;
      width: 42%;
      color: #4c525e;
    }
    .buttons {
      margin-top: 30px;
      .left {
        background: #101623;
        font-family: "Kanit", sans-serif;
      }
      .right {
        border: 1px solid #101623;
        color: #000;
        background: #fff;
        margin-left: 20px;
        font-family: "Kanit", sans-serif;
      }
    }

    @media screen and (max-width: 768px) {
      .ant-carousal{
        width: 70%;
      }
      #carousal-res{
        display: block !important;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
      }
      #carousal-web{
        display: none !important;
      }
      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 21px !important;
        line-height: 1.2;
        width: 90%;
      }

      .banner-text {
        font-size: 13px;
        width: 90%;
      }
      .ant-btn.ant-btn-lg {
        font-size: 13px;
        height: 36px;
      }
    }
  }
`;
