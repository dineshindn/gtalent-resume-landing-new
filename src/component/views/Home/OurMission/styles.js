import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import bg1 from '../../../../assets/home/ourMission/bg1.png';
import bg2 from '../../../../assets/home/ourMission/bg2.png';

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
// .our-mission-img{
//   background-image: url(${bg1}), url(${bg2.png});

// }

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
  p{
    font-family: Kanit;
font-size: 20px;
font-weight: 300;
line-height: 27px;
margin-top: 10px;
  }
 }
}
`;
