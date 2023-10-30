import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import { RF, MRF } from "../../../../reusableComponents/Function/functions";

export const TemplatesStyle = styled.div`
  .main-template {
    background: linear-gradient(
        328.66deg,
        rgba(65, 157, 241, 0.1) 33.24%,
        rgba(45, 143, 234, 0) 75.53%
      ),
      radial-gradient(
          50% 50% at 50% 50%,
          rgba(186, 38, 255, 0.02) 0%,
          rgba(162, 89, 255, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      radial-gradient(
          29.56% 59.96% at 50% 50%,
          rgba(213, 189, 245, 0.3) 0%,
          rgba(250, 247, 254, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    padding: 40px 0 78px;
    .heading{
        position: relative;
      }
      h1{
        text-align: center;
      }
    h1::after {
        bottom: -20px;
        content: "";
        height: 3px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        width: 100px;
        background-color: #233d7b;  
    }
    .popup-img{
        border-radius: 0px;
        width: 93%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        margin-top: 23px;
    }
 .templates img{
    width: 100%;
}
.templates{
    text-align: center;
}
.template-bottom{
    text-align: left;
    border-top: 1px solid #ddd;
    padding-top: 12px;
}
h3{
    font-weight: 700 !important;
}
.template-text {
    font-size: ${RF("18px")};
    font-weight: 400;
    line-height: ${RF("32px")};
    width:55%;
    margin: 45px auto 35px;
    padding: ${RF("10px")} 0 ${RF("27px")};
  }

.template-bottom h4{
    font-weight: 700;
}
.ant-card{
    height: 562px;
}
.ant-row{
    padding: 0 140px;
    margin: 0 !important;
}

}
`
