import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import bg1 from "../../../../assets/home/ourMission/bg1.png";
import bg2 from "../../../../assets/home/ourMission/bg2.png";

export const OurMissionStyle = styled.div`
  .ourMission {
    text-align: left;
    position: relative;
    margin-bottom: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 40px;
    padding: 20px;
    background-size: cover;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    img {
      width: 90%;
    }
    .heading {
      h1 {
        text-align: left;
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
        text-align: left;
        color: #242a36;
        margin-top: 0px;
        margin-bottom: 0px;
        display: inline-block;
      }
      p {
        font-family: Kanit;
        font-size: 20px;
        font-weight: 300;
        line-height: 27px;
        margin-top: 10px;
      }
    }
    /* Media Query for Mobile */
    @media screen and (max-width: 768px) {
      .heading h1 {
        font-size: 20px;
        padding-top: 10px;
      }
  
      .heading h2 {
        font-size: 24px;
        line-height: 28px;
      }
  
      .heading p {
        font-size: 14px;
        line-height: 20px;
      }
      .ourMission {
        grid-template-columns: 1fr;
      }
    }
  }
`;
