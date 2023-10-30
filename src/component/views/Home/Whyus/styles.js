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
      border-image: linear-gradient(303deg, transparent 50%, #a19f9f 62%) 1;
      border-image-slice: 1;
      border-image-width: 2px;
      background: #40454f;
    }
 
    .cardBody {
      display: flex;
      h4{
        color: #FFFFFF;
        opacity: .5;
        font-weight: 400;
        font-size: 17px;
      }
    }
    .text-left{
      text-align: left !important;
      line-height: 1.5;
      font-size: 15px;
      color: #D4D4D4;
    opacity: .8;
    }



  
  }
`;
