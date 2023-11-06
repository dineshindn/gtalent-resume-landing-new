import styled from "styled-components";
import dreams from "../../../../src/assets/home/banner/dreams.png";
import bdImg from "../../../../src/assets/login/login-bg.svg";

export const LoginStyle = styled.div`
  .register-container {
    background-image: url(${bdImg});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Make the image cover the entire screen */
    z-index: -1;
    background-repeat: no-repeat;

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
      width: 55%;
      span {
        background-image: url(${dreams});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
      }
    }

    .formCard {
      width: 85%;
      margin: 0 auto;
      border-radius: 20px;
      margin-top: 30px;
      position: relative;
    }

    .section{
      width: 60%;
      // margin: 0 auto;
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
      width: 100% !important;

    }

    .hovers{
      // width: 91%;
      position: absolute;
      z-index: 5;
      top: 56%;
      padding: 1.524390243902439vw 0 1.2195121951219514vw 0;
      /* background-color: rgb(0 0 0 / 44%); */
      backdrop-filter: blur(5px);
      color: #fff;
      /* transition: 0.7s ease-in-out; */
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      border-radius: 20px;
      .section{
        padding: 10px;

        .title{
          color:#fff;
        }
      }
    }
  }
`;
