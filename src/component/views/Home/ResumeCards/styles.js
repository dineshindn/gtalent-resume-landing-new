import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import dreams from "../../../../../src/assets/home/banner/dreams.png";
import bannerBackground from "../../../../../src/assets/home/banner/banner-background.png";

export const ResumeCardStyle = styled.div`
  .resumeCard {
    text-align: center;
    position: relative;
    margin-bottom: 30px;
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
      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 24px !important;
        line-height: 1.2;
        width: 75%;
      }

      .banner-text {
        font-size: 16px;
        width: 75%;
      }
    }
  }
`;
