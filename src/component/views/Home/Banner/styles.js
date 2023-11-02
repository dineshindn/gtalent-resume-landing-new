import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import dreams from "../../../../../src/assets/home/banner/dreams.png";
import bannerBackground from "../../../../../src/assets/home/banner/banner-background.png";

export const BannerStyle = styled.div`
  .banner {
    text-align: center;
    background-image: url(${bannerBackground});
    background-size: auto 433px;
    background-repeat: no-repeat;
    position: relative;
    background-position: top right;
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
      font-family: 'Young Serif', serif;
      font-size: 72px !important;
      line-height: 88px;
      //  top: 201px;
      text-align: center;
      color: #242a36;
      margin-top: 0px;
      margin-bottom: 0px;
      display: inline-block;
      max-width: 60%;

      span {
        background-image: url(${dreams});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
      }
    }

    .banner-text{
      font-family: 'Kanit', sans-serif;
      font-size: 20px;
      display: inline-block;
      width: 42%;
      color: #4C525E;
    }
    .buttons{
      .left{
        background: #101623;
        font-family: 'Kanit', sans-serif;
      }
      .right{
        border: 1px solid #101623;
        color: #000;
        background: #fff;
        margin-left: 20px;
        font-family: 'Kanit', sans-serif;
      }
    }
  }
`;
