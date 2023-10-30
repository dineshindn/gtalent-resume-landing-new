import React, { useEffect } from 'react';
import { AboutUsStyle } from './styles'
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
import videoCover1 from "../../../../assets/reusableComponents/footer/video-cover1.png";
import videoCover2 from "../../../../assets/reusableComponents/footer/video-cover2.png";
import ButtonCompo from "../../../../reusableComponents/views/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";

const AboutUs = () => {

  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  
  const onCardChange = (event) => {
    console.log("Card", event);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <AboutUsStyle>
      <div className='about-us'>
        <div className='aboutus-top'>
          <div className='aboutus-container-main'>
            <div data-aos="fade-right" data-aos-duration="1600" className='about_card_data'>
              <h1 className="head">Our Mission</h1>
              <p className='aboutus-text'>At G Talent Pro Resume Builder,  Our mission is to empower job seekers like you to stand out in a competitive job market. We believe that everyone deserves a chance to pursue their dream career, and a well-crafted resume is the first step towards making that dream a reality</p>
              <ButtonCompo text="Know More" type="bg-blue-border" ripple={true} />
            </div>
            <div className='aboutus-bg-container-main'>
              <div className='aboutus-bg-container'>
                {/* <Carousel afterChange={onChange} {...props}>
              <img src={aboutus1} alt="img" className='zoom_img' />
              <img src={aboutus1} alt="img" className='zoom_img' />
              <img src={aboutus1} alt="img" className='zoom_img' />
              </Carousel> */}
                <StackedCarousel
                  autoRotate={true}
                  onCardChange={onCardChange}
                  containerClassName={"container"}
                  cardClassName="card"
                  leftButton={<button>{"<"}</button>}
                  rightButton={<button>{">"}</button>}
                  {...settings}
                >
                  <div key={"child1"}>
                    <img src={aboutus1} className="image" alt="img" />
                  </div>
                  <div key={"child2"}>
                    <img src={videoCover1} className="image" alt="img" />
                  </div>
                  <div key={"child3"}>
                    <img src={videoCover2} className="image" alt="img" />
                  </div>
                </StackedCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutUsStyle>

  )
}

export default AboutUs