import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import dreams from "../../../../../src/assets/home/banner/dreams.png";
import bannerBackground from "../../../../../src/assets/home/whyUs/background-why-us.png";

export const WhyUsStyle = styled.div`
  .whyus {
    text-align: center;
    background-image: url(${bannerBackground});
    background-repeat: no-repeat;
    position: relative;
    margin-bottom: 30px;
    background-size: cover;
    background-color: #101623;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
}
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #7AA8D0;
      font-size: 32px;
      font-family: "Caveat";
    }

    h2 {
      font-family: "YoungSerif", serif;
      font-size: 43px !important;
      text-align: center;
      color: #FFFFFF;
      margin-top: 0px;
      margin-bottom: 0px;
      display: inline-block;
      width: 65%;
    }
    .element{
      border-right: 0px solid transparent;
      // border-image: linear-gradient(303deg, transparent 50%, #a19f9f 62%) 1;
      border-image-slice: 1;
      border-image-width: 2px;
      background: #40454f;
      border-radius: 8px; 
      height: 229px;
    }
 
    .cardBody {
      display: flex;
      align-items: center;
      h4{
        font-family: Kanit;
        font-size: 20px;
        font-weight: 300;
        line-height: 27px;
        color: #FFFFFF;
        opacity: .8;
        margin: 0;
      }
    }
    .text-left{
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.09px;
      text-align: left;
      color: #D4D4D4;
      opacity: .8;
    }
    

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 20px !important;
        padding-top: 10px;
      }
  
      h2 {
        font-size: 24px !important;
      }
  
      .element {
        margin: 5px;
      }
  
      .cardBody h4 {
        font-size: 17px;
        line-height: 18px;
      }
  
      .text-left {
        font-size: 12px;
      }
    }

  
  }
`;
