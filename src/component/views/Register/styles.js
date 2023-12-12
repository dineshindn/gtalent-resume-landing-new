import styled from "styled-components";
import dreams from "../../../../src/assets/home/banner/dreams.png";
import bdImg from "../../../../src/assets/register/bg-img1.svg";

export const RegisterStyle = styled.div`
  .register-container {
    // background-image: url(${bdImg});
    // background-size: 100%;
    // background-repeat: no-repeat;
    // position: relative;
    margin-bottom: 30px;
    .mob-date-code{
      display: none;
   }
    .web-phone-code{
      display: flex; 
      width: 100%;
      flex-direction: row;
      align-items: center; 
      justify-content: space-between;
    }
    
    h1 {
      text-align: center;
      margin: 0px 0 1px;
      padding-top: 40px;
      color: #3EB882;
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
      margin: 0 auto;
      span {
        background-image: url(${dreams});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
      }
    }

    .formCard{
        width: 70%;
        margin: 0 auto;
        border-radius: 20px;
        z-index: 2;
    }
    .mob-phone-code{
      display: none;
    }
  }
    .bannerBg{
      position: absolute;
      top: 0;
      right: 0;
      width: 27%;
    }

    @media screen and (max-width:768px){
      .register-container {
          .mob-date-code{
            display: block;

         }
          .mob-phone-code{
            display: flex;
            width: 100%;
         }
         .web-phone-code{
          display: none; 
         }
        h2{
            font-size: 24px !important;
            line-height: 1.5 !important;
            width: 90%;
        }
        h1{
            font-size: 20px !important;
        }

        .formCard{
            width: 90%;
        }
      }
      
    .bannerBg {
        width: 47%;
    }
  }
`;
