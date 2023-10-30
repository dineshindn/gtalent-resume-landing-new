import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const ContactStyle = styled.div`
  .contact {
    margin-top: 60px;
    padding: 0 80px;
    input{
    width: 100%;
    border: 1px solid #ccc;
    padding: 16px 10px 14px;
    border-radius: 3px;
    margin: 10px 0 27px;
}

.newp{
    padding: 15px 25px 28px;
    /* color: #f2f2f2; */
    font-size: 17px;
    font-weight: 450;
    line-height: 28px;
    text-align: center;
}

textarea{
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 3px;
    margin: 10px 0 15px;
}
select{
    width: 100%;
    border: 1px solid #ccc;
    padding: 16px 10px 14px;
    border-radius: 3px;
    margin: 10px 0 15px;
}
button{
    float: right;
    margin-right: 22px;
}
.contact-img{
    width: 50%;
}

h3{
    font-weight: 700;
}
 select:focus{
    outline: none;
}
textarea:focus{
    outline: none;
}
input:focus{
    outline: none;
}
.contact-right{
    text-align: center;
}
.contact-right h6{
    font-size: 18px;
    margin: 0px 0 8px;
}
.contact-head{
    text-align: center;
    margin-bottom: 35px;
}
.contact-head::after{
      content: "";
      height: 3px;
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: 100px;
      background-color: #233d7b;  
      margin-top: 50px;
}

.banner-btn{
    width: 170px;
    height: 46px;
}
}
`