import React from 'react'
import { JobListStyle } from './style';
import { Card, Col, Row, Typography } from "antd"; 
const { Text, Link } = Typography;

function JobsList() {
  return (
    <JobListStyle>
        
        <Row span={16}>
            <Col span={24}>
                <Card>
                    <Col span={10}>
                        <Link href="view_job?S2JzTW80TkJKT0EzQTRnajFMbHVwdz09=NWFBUFlEaDE5U25wTnk0NVQyZ1VYUT09"></Link>
                        <div>
                            <Text className="list-h6-style jobsHeading">Data Entry Operator</Text>
                            <br />
                            <Text className="list-h6-style jobsCompany">Gowin Risk Management</Text>
                        </div>
                    </Col>
                </Card>
            </Col>
        </Row>

    </JobListStyle>
  )
}

export default JobsList