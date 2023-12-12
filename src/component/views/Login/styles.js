import styled from "styled-components";
import bdImg from "../../../../src/assets/login/login-bg.svg";

export const LoginStyle = styled.div`
  .signin-container {
    background-image: url(${bdImg});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover; /* Make the image cover the entire screen */
    z-index: -1;
    background-repeat: no-repeat;
    .ant-card-body {
      padding: 24px 24px 52px;
    }
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 10px;
      color: #3eb882;
      font-size: 32px;
      font-family: "Caveat";
    }

    .formCard {
      width: 79%;
      margin: 0 auto;
      border-radius: 20px;
      margin-top: 30px;
      position: relative;
    }

    .section {
      width: 84%;
      margin: 0 auto;
    }
    .subTitle {
      font-family: Caveat;
      font-size: 20px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: left;
    }

    .title {
      font-family: Young Serif;
      font-size: 28px;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: left !important;
      margin-top: 0px;
    }

    .login-img {
      width: 100%;
      height: 470px !important;
    }

    .hovers {
      // width: 100%;
      position: absolute;
      z-index: 5;
      top: 63%;
      //   top: 41%;
      // width: 86%;
      // left: 39px;

      padding: 0;
      /* background-color: rgb(0 0 0 / 44%); */
      backdrop-filter: blur(5px);
      color: #fff;
      /* transition: 0.7s ease-in-out; */
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      border-radius: 20px;
      margin: 0 auto;
      .section {
        padding: 10px;

        .title {
          color: #fff;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .register-container {
      padding-bottom: 30px;
      height: auto;
      background-repeat: repeat;
      .title {
        line-height: 28px;
        width: 100% !important;
        font-size: 20px;
        margin-bottom: 0px;
      }
     .ant-card .ant-card-body {
        padding: 24px 24px 75px !important;
      }
      .formCard {
        width: 85%;
      }
      h1 {
        padding-top: 10px;
      }

      .ant-card .ant-card-body {
        padding: 24px 24px 153px;
      }
    }
  }
`;
