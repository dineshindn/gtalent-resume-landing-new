import React, {useState, useEffect} from 'react';
import ss1 from '../../../../assets/home/templates/ss1.png';
import ss2 from '../../../../assets/home/templates/ss2.png';
import ss3 from '../../../../assets/home/templates/ss3.png';
import {TemplatesStyle} from './styles.js';
import {Modal, Card, Row, Col} from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';
const { Meta } = Card;

function Templates() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  
  return (

    <TemplatesStyle>
    <div id='templates' className='main-template'>
        <div className='container templates'>
        <div className="heading"  data-aos="fade-down" data-aos-duration="1000">
        <h1>Resume Templates for Every Career Path</h1>
        </div>
        <p className="template-text"  data-aos="fade-down" data-aos-duration="1000" >You can pick one of our handcrafted resume templates above. You can start building your resume in less than 5 seconds, using predefined sections approved by recruiters worldwide. You can also customize it to your own needs and personality and hit 'Download'. It's THAT easy to use, even if you've never made a resume in your life before!</p>
        <Row gutter={32}>
           <Col span={8} >
           <Card  data-aos="fade-right" data-aos-duration="1600"
              onClick={() => setOpen1(true)}
              bordered={false}
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  alt="example"
                  src={ss1}
                  style={{
                    borderRadius: "0px",
                  }}
                />
              }
            >
              <div className="template-bottom">
                <Meta
                  title="Creative Resume Template"
                  description="A resume template as creative as your imagination"
                />
                {/* <ButtonCompo type="bg-trans" text="Know More"/> */}
              </div>
            </Card>
           </Col>
           <Col span={8} >
           <Card
            data-aos="fade-up" data-aos-duration="1600"
             onClick={() => setOpen2(true)}
              bordered={false}
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  alt="example"
                  src={ss2}
                  style={{
                    borderRadius: "0px",
                  }}
                />
              }
            >
              <div className="template-bottom">
                <Meta
                  title="Professional Resume template"
                  description="Put your best foot forward with a professional resume template"
                />
                {/* <ButtonCompo type="bg-trans" text="Know More"/> */}
              </div>
            </Card>
           </Col>
           <Col span={8} >
           <Card
            data-aos="fade-left" data-aos-duration="1600"
              onClick={() => setOpen3(true)}
              bordered={false}
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  alt="example"
                  src={ss3}
                  style={{
                    borderRadius: "0px",
                  }}
                />
              }
            >
              <div className="template-bottom">
                <Meta
                  title="College Resume Template"
                  description="No experience? No problem!"
                />
                {/* <ButtonCompo type="bg-trans" text="Know More"/> */}
              </div>
            </Card>
           </Col>
        </Row>
      <Modal
        centered
        open={open1}
        footer={null}
        onCancel={() => setOpen1(false)}
      >
        <img
                  alt="example"
                  src={ss1}
                  style={{
                    borderRadius: "0px",
                    width: '93%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    marginTop: '23px'
                  }}
        />
      </Modal>
      <Modal
        centered
        open={open2}
        footer={null}
        onCancel={() => setOpen2(false)}
      >
        <img

                  alt="example"
                  src={ss2}
                  style={{
                    borderRadius: "0px",
                    width: '93%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    marginTop: '23px'
                  }}
        />
      </Modal>
      <Modal
        centered
        open={open3}
        footer={null}
        onCancel={() => setOpen3(false)}
      >
        <img

                  alt="example"
                  src={ss3}
                  style={{
                    borderRadius: "0px",
                    width: '93%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    marginTop: '23px'
                  }}
        />
      </Modal>
        {/* <div className='row col-md-12'>
          <div className='col-md-4'>
            <div className='card'>
                <div className='card-body'>
                    <img src={ss1} alt="ss1" />
                </div>
            </div>
            <div className='template-bottom'>
                <h4>Creative Resume Template</h4>
                <p>A resume template as creative as your imagination</p>  
            </div>            
          </div>
          <div className='col-md-4'>
            <div className='card'>
                <div className='card-body'>
                    <img src={ss2} alt="ss1" />
                </div>
            </div>
            <div className='template-bottom'>
               <h4>Professional Resume template</h4>
               <p>Put your best foot forward with a professional resume template</p>
            </div>   
          </div>
          <div className='col-md-4'>
            <div className='card'>
                <div className='card-body'>
                    <img src={ss3} alt="ss1" />
                </div>
            </div>
            <div className='template-bottom'>
               <h4>College Resume Template</h4>
               <p>No experience? No problem!</p>
            </div>
          
          </div>

            </div> */}

        </div>
    </div>
    </TemplatesStyle>
   
  )
}

export default Templates