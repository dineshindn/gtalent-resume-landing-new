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

  .ant-collapse-item{
    border-bottom: 1px solid #d9d9d9 !important;
  }
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
    font-family: Young Serif;
font-size: 52px;
font-weight: 400;
line-height: 54px;
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

.custom-expand-icon {
  display: flex !important;
  justify-content: flex-end;
  align-items: center !important;
  width: 24px; /* Adjust the width as needed */
  cursor: pointer;
}

.plus {
  color: green; /* Color for the plus sign */
  margin-left: auto; /* Move the plus sign to the right */
  font-size: 20px !important;
  font-weight: 600;
}

.minus {
  color: red; /* Color for the minus sign */
  margin-left: auto; /* Move the minus sign to the right */
  font-size: 20px !important;
  font-weight: 600;
  
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 24px !important;
    line-height: 1.3 !important;
    width: 100% !important;
  }

  /* Additional mobile styles can be added here */
}
}

}


 
`;
