import styled from "styled-components";
import * as palette from "../../../../styles/variables";

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


  img{
    width: 90%;
  }
 .heading{
  h1 {
    text-align: left;
    margin: 0px 0 1px;
    padding-top: 40px;
    color: #353FA7;
    font-size: 32px;
    font-family: "Caveat";
  }

  h2 {
    font-size: 44px !important;
    text-align: left;
    color: #242a36;
    margin-top: 0px;
    margin-bottom: 0px;
    display: inline-block;
    width: 43%;
  }
  p{
    font-size: 20px;
    line-height: 1.5;
  }
 }
}
`;
