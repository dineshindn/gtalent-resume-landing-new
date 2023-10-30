import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import { RF, MRF } from "../../../../reusableComponents/Function/functions";

export const AboutUsStyle = styled.div`
  .about-us {
    .about_card_data {
      
      width: ${RF("700px")};
      
      .ripple_btn {
        background-color: #275cbe !important;
        .btnCont {
          color: #fff !important;
          &:hover,
          &:active,
          &:focus {
            color: #275cbe !important;
          }
          .btn-bg {
            background-color: #fff !important;
          }
        }
      }
    }
    h1 {
      font-size: ${RF("48px")};
      font-weight: 700;
      line-height: ${RF("58px")};
      margin: 0;
    }
    h3 {
      font-size: ${RF("24px")};
      font-weight: 600;
      color: #212121;
    }
    .aboutus-text {
      font-size: ${RF("18px")};
      font-weight: 400;
      line-height: ${RF("32px")};
      margin: 0;
      padding: ${RF("10px")} 0 ${RF("27px")};
    }
    .aboutus-top {
      padding: ${RF("50px")} ${RF("90px")} ${RF("100px")} ${RF("100px")};
    }

    .aboutus-container-main {
      display: flex;
      align-items: center;
    }
    .aboutus-bottom {
      background-color: #ebf6fa;
      width: 100%;
    }

    .aboutus-bg-container-main {
      width: ${RF("650px")};
      height: ${RF("421px")};
      margin-left: ${RF("80px")};
      ${"" /* background-color: #275cbe; */}
      .aboutus-bg-container {
        width: ${RF("660px")};
        height: ${RF("431px")};
        right: ${RF("20px")};
        top: ${RF("20px")};
        overflow: hidden;
        .zoom_img {
          width: 100%;
          transition: transform 0.2s;
          right: ${RF("24px")};
          top: ${RF("24px")};
        }
        .zoom_img:hover {
          transform: scale(1.02);
        }
      }

      .slick-list {
        width: 90%;
        margin: 0 auto;
      }

      .slick-slide div {
        padding: 0px ${RF("10px")};
      }

      ul.container li.card {
        width: ${RF("1000px")};
        height: fit-content;
        background: transparent;
      }

      ul.container li.card .image {
        width: ${RF("600px")};
        height: ${RF("421px")};
      }

      ._1Lxpd {
        position: relative !important;
        width: ${RF("1000px")} !important;
        background: transparent !important;
        overflow: hidden !important;
        height: ${RF("421px")} !important;
        align-items: inherit !important;
      }
      ._1Lxpd button {
        display: none;
      }
    }
  }

  @media (max-width: 650px) {
    .about-us {
      padding-top: ${MRF("40px")};
      padding-bottom: ${MRF("40px")};
      .about_card_data {
        width: 100%;
      }
      .aboutus-top {
        .aboutus-container-main {
          flex-direction: column-reverse;
          .about_card_data {
            margin-top: ${MRF("50px")};
            text-align: center;
            h1 {
              font-size: ${MRF("24px")};
            }
            .aboutus-text {
              font-size: ${MRF("16")};
              font-weight: 500;
              line-height: ${MRF("26px")};
              width: ${MRF("410px")};
              margin-top: ${MRF("17px")};
            }
            .ripple_btn {
              width: ${MRF("182px")};
              height: ${MRF("52px")};
              font-size: ${MRF("16px")};
              border-radius: ${MRF("8px")};
              margin: ${MRF("17px")} auto auto auto;
            }
          }
          .aboutus-bg-container-main {
            width: ${MRF("354px")};
            height: ${MRF("227px")};
            ${'' /* .aboutus-bg-container {
              width: ${MRF("354px")};
              height: ${MRF("227px")};
              .zoom_img {
                width: ${MRF("354px")};
                height: ${MRF("227px")};
                right: ${MRF("15px")};
                top: ${MRF("15px")};
              }
            } */}
            ul.container li.card {
              width: ${MRF("1000px")};
              height: ${MRF("1000px")};
              background: red;
              .image {
              width: ${MRF("354px")};
              height: ${MRF("227px")};
            }
            }
          }
        }
      }
    }
  }

  
`;
