import styled from "styled-components";
// import * as palette from "../../../styles/variables";

export const ButtonStyle = styled.div`
    .banner-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 218px;
      height: 56px;
      overflow: hidden;
      cursor: pointer;
      font-family: Inter;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      border-radius: 25px;
      border: 1px solid #fff;
      background-color: transparent;
      .btn_text {
        color: #275cbe;
        z-index: 1;
      }
      .back_animation {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
        z-index: 0;
        transition: 0.35s ease-in-out;
      }
    }

    .banner-btn:hover {
      .btn_text {
        color: #ffff;
      }
      .back_animation {
        left: 100%;
      }
    }

    ${'' /* bg-trans (Trans background) */}
    .bg-trans {
      .btn_text {
        color: #fff;
      }
      .back_animation {
      background-color: transparent;
      }
    }

    .bg-trans:hover {
      border-color: #101623;
      .btn_text {
        color: #101623;
      }
    }

    ${'' /* bg-blue (background blue, Hover border white) */}
    .bg-blue {
      border: 1px solid #101623;
      .btn_text {
        color: #fff;
      }
      .back_animation {
      background-color: #101623;
      }
    }

    .bg-blue:hover {
      border-color: #fff;
      .btn_text {
        color: #fff;
      }
    }

    ${'' /* bg-blue-border (background blue, Hover border blue) */}
    .bg-blue-border {
      border: 1px solid #101623;
      .btn_text {
        color: #fff;
      }
      .back_animation {
      background-color: #101623;
      }
    }

    .bg-blue-border:hover {
      border-color: #101623;
      .btn_text {
        color: #101623;
      }
    }

    ${'' /* bg-blue-border-black-txt (background white, border blue, Hover border white) */}
    .bg-blue-border-black-txt {
      border: 1px solid #101623;
      .btn_text {
        color: #333333;
      }
      .back_animation {
      background-color: #fff;
      }
    }

    .bg-blue-border-black-txt:hover {
      border-color: #101623;
      .btn_text {
        color: #101623;
      }
    }

    ${'' /* bg-trans-border-white-txt (Trans background) */}
    .bg-trans-border-white-txt {
      background-color: #fff;
      .btn_text {
        color: #fff;
      }
      .back_animation {
      background-color: #101623;
      }
    }

    .bg-trans-border-white-txt:hover {
      border-color: #fff;
      .btn_text {
        color: #101623;
      }
    }
`;