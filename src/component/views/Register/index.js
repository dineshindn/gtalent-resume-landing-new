import React, { useEffect, useState } from "react";
import { RegisterStyle } from "./styles";
import { Form, Input, Select, Radio, DatePicker, Upload, Button, Card, Row, Col} from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import bannerBackground from "../../../../../src/assets/home/banner/banner-background.png";
import bannerBackground from "../../../assets/home/banner/banner-background.png";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const { Option } = Select;

const BASE_URL = 'http://localhost:3001/api/v1';

const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [nationalityArray, setNationalityArray] = useState([]);
  const [countryCode, setCountryCode] = useState()
  const [stateArray, setStateArray] = useState([]);
  const [cityArray ,setCityArray] = useState([]);
  const [vendorArray_skill, setVendorArray_skill] = useState([]);
  const [nationalityArray_edu, setNationalityArray_edu] = useState([]);
  const [secQuali ,setSecQuali] = useState([]);
  const [candidate, setCandidate] = useState('fresher');
  const [phonecode, setPhonecode] = useState([]);
  const [companyArray ,setCompanyArray] = useState([]);
  const [designationArray, setDesignationArray] = useState([]);

  // Handle form data changes and update the state
  const handleFormChange = (changedValues, allValues) => {
    console.log(changedValues, "ccccccccc")
    setFormData(allValues);
    console.log(formData, "formdata")
  };
  const onFinish = (values) => {
    // Handle form submission here
    console.log("Form values:", values);
  };

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
    const fetchData = async () => {
      try {
       
        await getapicall();
      }
      catch(e){

      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const getapicall = async() => {
    try{
      let countryArray = [];
      let phonecodeTArray = [];
      const response = await axios.get(`${BASE_URL}/master/countries`);
      console.log(response.data, "country");
      for (let i = 0; i < response.data.data.length; i++) {
        let countryList = {
          value: response.data.data[i].id,
          label: response.data.data[i].name,
        };
        let phonecodeList = {
          value: response.data.data[i].id,
          label: "+" + response.data.data[i].phonecode,
        };
        countryArray.push(countryList);
        phonecodeTArray.push(phonecodeList);
      }
      setNationalityArray(countryArray);
      setPhonecode(phonecodeTArray)
      let employment_array = [];
      let countryArray_edu = [];
      const response_edu = await axios.get(
        `${BASE_URL}/master/primary_qualification`
      );
      console.log(response_edu.data, "rres")
      for (let i = 0; i < response_edu.data.data.length; i++) {
        let countryList = {
          value: response_edu.data.data[i].id,
          label: response_edu.data.data[i].english,
        };
        countryArray_edu.push(countryList);
      }
      setNationalityArray_edu(countryArray_edu);
    }
    catch(e){

    }
  }
  const handleCountry = async(e) => {
    setCountryCode(e)
    console.log(e, "couyyyyyyyyyy")
        let countryId = e;
        let stateTArray = [];
        const response = await axios.get(
          `${BASE_URL}/master/states?id=${countryId}`
        );
        for (let i = 0; i < response.data.data.length; i++) {
          let stateList = {
            value: response.data.data[i].id,
            label: response.data.data[i].name,
          };
          stateTArray.push(stateList);
        }
        setStateArray(stateTArray);
  }
  const handleState = async(e) => {
    console.log(e);
    let cityTArray = [];
    const response = await axios.get(`${BASE_URL}/master/cities?id=${e}`);
    for (let i = 0; i < response.data.data.length; i++) {
      let cityList = {
        value: response.data.data[i].id,
        label: response.data.data[i].name,
      };
      cityTArray.push(cityList);
    }
    setCityArray(cityTArray);
  }
  const skills_getapi = async (e) => {
    let vendorTArray_skill = [];
    if (e !== "") {
      const response_skill = await axios.get(`${BASE_URL}/master/skills/${e}`);
      for (let i = 0; i < response_skill.data.data.length; i++) {
        let vendorList = {
          value: response_skill.data.data[i].english,
          label: response_skill.data.data[i].english,
        };
        vendorTArray_skill.push(vendorList);
      }
      setVendorArray_skill(vendorTArray_skill);
    }
  };
  const handleDegree = async(e) => {
      let s_qualification = [];
        const response = await axios.get(
          `${BASE_URL}/master/secondary_qualification?id=${e}`
        );
        for (let i = 0; i < response.data.data.length; i++) {
          let stateList = {
            value: response.data.data[i].id,
            label: response.data.data[i].english,
          };
          s_qualification.push(stateList);
        }
        setSecQuali(s_qualification)



      }

  const handleCandidateChange = async(e) => {  
    console.log(e, "candi")
    setCandidate(e.target.value)
  }

  const handleSetCompany_emp = async (e) => {
    let companyTArray = [];
    if (e !== "") {
      const response = await axios.get(
        `${BASE_URL}/master/current_company/${e}`
      );
      for (let i = 0; i < response.data.data.length; i++) {
        let companyList = {
          value: response.data.data[i].english,
          label: response.data.data[i].english,
        };
        companyTArray.push(companyList);
      }
      setCompanyArray(companyTArray);
    }
  };
  const handleSetDesignation_emp = async (e) => {
    let designationTArray = [];
    if (e !== "") {
      const des_response = await axios.get(
        `${BASE_URL}/master/designation/${e}`
      );
      for (let i = 0; i < des_response.data.data.length; i++) {
        let designationList = {
          value: des_response.data.data[i].english,
          label: des_response.data.data[i].english,
        };
        designationTArray.push(designationList);
      }
      setDesignationArray(designationTArray);
    }
  };

    
 
  return (
    <RegisterStyle>
      <div id="register-container" className="register-container">
        <div className="heading">
          <h1 data-aos="fade-down" data-aos-duration="1000">
            Fast. Easy. Effective.
          </h1>
          <h2 data-aos="fade-down" data-aos-duration="1300">
            Sign up faster, to choose easy way create resume
          </h2>
        </div>
        <Card className="formCard" >
        <Form
          onFinish={onFinish}
          labelCol={{ span: 12 }}
          layout="vertical"
          onValuesChange={handleFormChange}
        >
          <Row gutter={16}>
                <Col span={12}>
          <Form.Item
            name="email"
            label="Email ID"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Enter your valid email id" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="username"
            label="Full Name *"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="password"
            label="Create a password"
            rules={[{ required: true }]}
          >
            <Input.Password  placeholder="Enter password "/>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match.")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Enter password " />
          </Form.Item>
          </Col>
       { <div className="web-phone-code">    
       <Col span={12} style={{display: 'flex',
    width: '100%',
    justifyContent: 'space-between'}}>
          <Form.Item 
            name="phoneCode"
            label="Code*"
            rules={[{ required: true }]}
            style={{width: "20%"}}
          > 
            <Select
             defaultValue="+91"
             options={phonecode}
    />
          </Form.Item>
          <Form.Item
            name="mobileNo"
            label="Phone Number*"
            rules={[{ required: true }]}
            style={{width: "76%"}}
          >
            <Input placeholder="Enter Phone number" />
          </Form.Item>
       </Col>
       <Col span={12}>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          </Col>
          </div>
}
          {
            <div className="mob-phone-code">
             
               <Col span={12} >
                   <Form.Item 
            name="phoneCode"
            label="Code*"
            rules={[{ required: true }]}
          > 
            <Select
             defaultValue="+91"
             options={phonecode}
    />
                   </Form.Item>
               </Col>
               <Col span={12} >
                  <Form.Item
            name="mobileNo"
            label="Phone Number*"
            rules={[{ required: true }]}
            style={{width: '100%'}}
          >
            <Input placeholder="Enter Phone number" />
                  </Form.Item>
               </Col>
              
           
            </div>
          }
      {
           <Col span={12} className="mob-date-code">
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
               </Col>
         }
        
          <Col span={12}>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select>
            <Option value="" selected >Gender</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Others">Others</Option>
            </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="nationality"
            label="Nationality"
            rules={[{ required: true }]}
          >
             <Select
                          id="country"
                          showSearch
                          placeholder="Select Country"
                          onChange= {handleCountry}
                          options={nationalityArray}
                        />
           </Form.Item>
          </Col>
          <Col span={24}>
          <Form.Item
            name="candidateType"
            label="Candidate Type"
            rules={[{ required: true }]}
          >
            <Radio.Group  onChange={handleCandidateChange}>
              <Radio value="0">Intern</Radio>
              <Radio value="1">Fresher</Radio>
              <Radio value="2">Experience</Radio>  
            </Radio.Group>
          </Form.Item>
          </Col>
      {candidate == 'fresher' ?
      <>
         <Col span={12}>
          <Form.Item
            name="employmentType"
            label="Employment Type"
            rules={[{ required: true }]}
          >
          
            <Select
        options={[
        { value: 'Permanent', label: 'Permanent' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Freelance', label: 'Freelance' },
      ]}
    />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="passedOutYear"
            label="Passed Out Year"
            rules={[{ required: true }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          </Col>
      </>
          : ''
}
{candidate == 'intern' ?
      <>
         <Col span={12}>
          <Form.Item
            name="internshipType"
            label="Internship Type"
            rules={[{ required: true }]}
          >
          
            <Select
        options={[
        { value: 'Free Internship', label: 'Free Internship' },
        { value: 'Paid Internship', label: 'Paid Internship' },
        { value: 'Any', label: 'Any' },
      ]}
    />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="passedOutYear"
            label="Passed Out Year"
            rules={[{ required: true }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          </Col>
      </>
          : ''
}
{candidate == 'experience' ?
       <>
       <Col span={12}>
        <Form.Item
          name="employmentType"
          label="Employment Type"
          rules={[{ required: true }]}
        >
        
          <Select
      options={[
      { value: 'Permanent', label: 'Permanent' },
      { value: 'Contract', label: 'Contract' },
      { value: 'Freelance', label: 'Freelance' },
    ]}
  />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
          name="currentCompany"
          label="Current Company"
          rules={[{ required: true }]}
        >
            <Select
               onSearch={(e) => handleSetCompany_emp(e)}
               showSearch // Enable searching
               autoComplete="off" 
               placeholder="Search for a Company"
               options={companyArray} 
    />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
          name="currentDestination"
          label="Current Destination"
          rules={[{ required: true }]}
        >
            <Select
              placeholder="Search for a Designation"
              onSearch={(e) => handleSetDesignation_emp(e)}
              showSearch // Enable searching
              autoComplete="off" 
              options={designationArray} 
    />
        </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="employmentSince"
            label="Employment Since"
            rules={[{ required: true }]}
          >
            <DatePicker picker="year" />
          </Form.Item>
          </Col>
    </>
          : ''
}
          <Col span={24}>
          <Form.Item
            name="primarySkills"
            label="Primary Skills"
            rules={[{ required: true }]}
          >
              <Select
                      mode="tags"
                      style={{
                        width: "100%",
                      }}
                      onSearch={(e) => skills_getapi(e)}
                      notFoundContent={null}
                      // onChange={handleSkillsChange_skill}
                      placeholder="Search for Skills"
                      options={vendorArray_skill}
                    />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
            name="qualification"
            label="Qualification"
            rules={[{ required: true }]}
          >
            <Select
                                id="primary_qualification"
                                showSearch
                                placeholder="Select primary_qualification"
                                onChange={handleDegree}
                                options={nationalityArray_edu}
                                autoComplete="off"
                              />
          </Form.Item>
          </Col>  
          
          <Col span={12}>
          <Form.Item
            name="degreeName"
            label="Degree Name"
            rules={[{ required: true }]}
          >
             <Select
                                showSearch
                                placeholder="Select Degree"
                                options={secQuali}
                                autoComplete="off"
                              />
          </Form.Item>

          </Col>

          <Col span={12}>
          <Form.Item
            name="street1"
            label="Street 1"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter the address"/>
          </Form.Item>
          </Col>

          <Col span={12}>
          <Form.Item
            name="street2"
            label="Street "
          >
             <Input placeholder="Enter the street 2"/>
          </Form.Item>
          </Col>



          <Col span={12}>
          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
           <Select
                          id="country"
                          value={
                            countryCode
                              ? nationalityArray.find(
                                  (option) => option.value === countryCode)?.label
                              : undefined
                          }
                          showSearch
                          placeholder="Select Country"
                          onChange= {handleCountry}
                          options={nationalityArray}
                          autoComplete="off"
                        />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="state" label="State" rules={[{ required: true }]}>
          <Select
                          id="state"
                          showSearch
                          placeholder="Select State"
                          onChange={handleState}
                          options={stateArray}
                          autoComplete="off"
                        />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Select
                          id="city"
                          showSearch
                          placeholder="Select City"
                          options={cityArray}
                          autoComplete="off"
                        />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="pincode" label="Pincode">
            <Input placeholder="Enter the pincode" />
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="about us" label="How do you know about us">
          <Select>
              <Option value="Instagram">Instagram</Option>
              <Option value="Facebook">Facebook</Option>
              <Option value="Telegram">Telegram</Option>
              <Option value="Whatsapp">Whatsapp</Option>
              <Option value="Linked In">Linked In</Option>
              <Option value="Friends">Friends</Option>
              <Option value="Training Institute">Training Institute</Option>
              <Option value="Campus">Campus</Option>
              <Option value="Others">Others</Option>
             </Select>
          </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item name="fileUpload" label="File Upload">
            <Upload
              name="file"
              action="/upload.do"
              listType="text"
              customRequest={() => {}}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
            
          </Form.Item>
          </Col>
         
          
          <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          </Row>
        </Form>
        </Card>
      </div>
      <img className="bannerBg" src={bannerBackground} alt="bg"/>
    </RegisterStyle>
  );
};

export default RegisterForm;
