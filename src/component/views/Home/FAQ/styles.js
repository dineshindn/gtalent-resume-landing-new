import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const FAQStyle = styled.div`
.faq {
  text-align: left;
  position: relative;
  margin-bottom: 30px;
  width: 80%;
  margin: 0 auto;
  border-radius: 40px;
  padding: 20px;
  background-size: cover; 
  margin-bottom: 30px;
  background: #fff;


  img{
    width: 90%;
  }
 .heading{
  h1 {
    text-align: left;
    margin: 0px 0 1px;
    // padding-top: 40px;
    color: #3EB882;
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

 /* Move the expand icon to the right side */
.custom-collapse .ant-collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-collapse .ant-collapse-extra {
  order: 2;
  margin-left: auto; /* Push the icon to the right */
}

}
`;
