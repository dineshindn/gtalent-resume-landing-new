import styled from "styled-components";
import gtalentText from "../../../assets/reusableComponents/footer/GTalentPro.svg";

export const FooterTopStyle = styled.div`
  .footerTop {
    width: 100%;
    margin-bottom: -25px;
    background: linear-gradient(to bottom, #D9D9D900, #3996E1);
    // background-image: url(${gtalentText});
    h1{
      font-size: 227.66px;
      background: linear-gradient(to bottom, #D9D9D900, #3996E1);
      margin-bottom: 0;
      margin-top:0;
      color: #fff;
      opacity: 0.8;
      text-align: center;
      span{
        font-size: 63px;
        color: #fff;
        position: absolute;
        right: 40px;

      }
    }

    .gtext{
      margin-top: 103px;
      width: 94%;
      text-align: center;
      display: inline;
      margin-left: 15px;
    }

    .gtm{
      margin-bottom: 112px;
      position: relative;
    }

    
  
  }

  @media screen and (max-width: 768px) {
    .footerTop {
        margin-bottom: -10px;
        margin-top: -35px;
      h1 {
        font-size: 36px; /* Updated font size for mobile screens */
      }

      h1 span {
        font-size: 16px; /* Updated font size for mobile screens */
        right: 10px;
      }

      .gtext {
        margin-top: 30px;
        width: 80% !important;
      }

      .gtm {
        margin-bottom: 30px; /* Adjusted margin for mobile screens */
        width: 20px;
      }
    }
`;
