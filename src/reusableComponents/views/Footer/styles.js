import styled from "styled-components";
// import * as palette from "../../../styles/variables";
// import footerBg from "../../../assets/reusableComponents/footer/footer-bg.png";
// import * as palette from "../../../styles/variables";
// import footerBg from "../../../assets/reusableComponents/footer/footer-bg.png";
import footerBg from "../../../assets/reusableComponents/footer/bg-text-img.svg";

export const FooterStyle = styled.div`
.footer-main{
  position: relative;
}
.footerTop {  
  width: 100%;
  position: absolute;
  top: -198px;
  z-index: 1;  
  overflow: hidden;  
  background-image: url(${footerBg});
  h1{
    font-size: 225.66px;
    background: linear-gradient(to bottom, #D9D9D900, #3996E1);
    margin-bottom: 0;
    margin-top:0;
    color: #fff;

    span{
      font-size: 63px;
      color: #fff;
      position: absolute;
      right: 40px;

    }
  }
}
  .footer {
    font-family: Kanit;
    position: relative;
    z-index: 2;
    padding: 50px 100px 65px;
    background: #101623;
    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      color: #ffffff;
    }
    p {
      margin: 0;
    }
   
    .footer-description {
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
      color: #546997;
      opacity: 80%;
    }
    .home-row{
      padding-left: 70px;
    }
    .aLink a{ color: #fff;}
    ul li {
      display: flex;
      align-items: center;
      gap: 8px;  
      list-style-type: none;
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
      opacity: 80%;
      color: #ffffff;
    }
    ul {
      padding: 0;
    }
    h3 {
      font-size: 19px;
      font-weight: 600;
      line-height: 23px;
      margin-bottom: 5px;
      color: #ffffff;
      opacity: 80%;
    }
    .footer-copyright {
      opacity: 80%;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
      .footer-links{
        display: flex;
        gap: 30px;
        // margin: 85px auto 30px;
        margin-top: 15px;
      }
      .footer-terms{
       display: flex;
       justify-content: space-between;
       margin-top: 8px;
      }
      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.06em;
        color: #ffffff;
        
      }
      .whatwedo-content{
        margin-top: 75px;
      }
      .whyus-content{
        margin-top: 75px;
      }
    }
  }
  @media (max-width: 768px) {
  .footer {
    margin-top: 0px;
    padding: 0px 17px 40px;
   
    .ant-col-8 {
      width: 100% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
    }
    h2{
      font-family: IBM Plex Sans;
      line-height: 31px;
    }
    .footer-description{
      font-family: IBM Plex Sans;
    }
    .video-cover-container {
      padding-top: 3px;
  }
  .video-cover-row{
    padding-top: 25px;
  }
  .home-row{
      margin-top: 10px;
      max-width: 50% !important;
      flex: 0 0 50% !important;
      padding-left: 0px;
  }
  .whoweare-row{
      max-width: 50% !important;
      flex: 0 0 50% !important;
      margin-top: 10px;
  }
  ul li {
    font-family: IBM Plex Sans;
  }
  h3{
    font-family: IBM Plex Sans;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 5px;
  }
  ul{
    margin: 0;
  }
  .whatwedo-content{
    margin-top: 40px;
  }
  .whyus-content{
    margin-top: 73px;
  }
  .contact-row{
    max-width: 100% !important;
    flex: 0 0 100% !important;
    margin-top: 14px;
  }
  .footer-copyright div{
    display: flex;
gap: 30px;
margin: 32px auto 21px;
justify-content: flex-start !important; 
align-items: center;
  }
  .footer-copyright p{
  padding: 0;
  }
  }
`;
