import React from "react"
import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import Image from 'next/image'

import { Row, Col } from 'react-bootstrap'


const SideBar = ({projectCategory, heading}) => {
    
    return (
        <div className="border-right mt-5 pt-5 bg-secondary ">
            <Container fluid>
                <Row className="">
                    <Col lg={2} className=" br b--white-20 d-md-none d-lg-block">
                    
                    </Col>

                    <Col lg={8} sm={12} className=" white " >
                        {heading}
                        <Row>
                            {projectCategory}
                        </Row>
                        
                        
                    </Col>
                    <Col lg={2} className="d-md-none d-lg-block bl b--white-20">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SideBar;