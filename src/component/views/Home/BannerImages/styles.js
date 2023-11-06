import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    .bannerImages img{
      width: 80%;
      height: auto;
      display: block;
      margin: 0 auto;
      object-fit: cover;
    }
  }
 
`;
