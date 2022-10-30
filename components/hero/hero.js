import React from "react";
import Image from "next/image";
import {Container, Row, Col, Button, } from 'react-bootstrap'
import landing from '../../public/assets/site-design-pics/landing-1.png'
import reactLogo from "../../public/assets/logos/react.png"
import cppLogo from "../../public/assets/logos/cpp.png"
import fusionLogo from "../../public/assets/logos/fusion-360.png"
import wpLogo from "../../public/assets/logos/wordpress.png"
import embedLogo from "../../public/assets/logos/embedded.png"
import pyLogo from "../../public/assets/logos/python.png"


const Hero = ()=>{
    return(
        <section className="hero">
            <Container fluid className=' bg-secondary py-1 tc-m mt-5'  >
                <Row className="align-items-center mx-md-1 mx-xl-3 mx-xxl-5">
                    <Col lg={6} sm={12} className="py-sm-4">
                        <div className=" " >
                        <h1 className=" text-white f-headline ">
                            Learn By Building <span className="text-primary font-weight-medium">Interesting Projects</span>
                        </h1>
                        <p className="text-white mb-4 py-2 fs-5">
                            RDP offers offers comprehensive suite of projects covering a wide variety of technologies. 
                        </p>
                            <Button className="fs-3 py-2" href="#trending">Find Out More &darr;</Button>
                        
                        </div>
                    </Col>
                    <Col lg={6} className="py-3">
                        <div >
                            <Image src={landing} alt="test" height={600} width={600}/>
                        </div>
                    </Col>
                </Row>
                
                <Row className="align-items-center py-5 text-center">
                    <Col sm={4} lg={2} className="grow">
                        <Image src={reactLogo} alt="react"height={100} width={100} className="App-logo"/>
                        <p><span className="text-primary fs-5">React</span></p>
                    </Col>
                    <Col sm={4} lg={2} className="grow">
                        <Image src={cppLogo} alt="react"height={100} width={100}/>
                        <p><span className="text-primary fs-5">C++</span></p>
                    </Col>
                    <Col sm={4} lg={2} className="grow" >
                    <Image src={embedLogo} alt="react"height={100} width={100}/>
                    <p><span className="text-primary fs-5">Electronics</span></p>
                    </Col>
                    <Col sm={4} lg={2} className="grow" >
                    <Image src={pyLogo} alt="react"height={100} width={100}/>
                    <p><span className="text-primary fs-5">Python</span></p>
                    </Col>
                    <Col sm={4} lg={2} className="grow" >
                    <Image src={wpLogo} alt="react"height={100} width={100}/>
                    <p><span className="text-primary fs-5">WordPress</span></p>
                    </Col>
                    <Col sm={4} lg={2} className="grow" >
                    <Image src={fusionLogo} alt="react"height={100} width={100}/>
                    <p><span className="text-primary fs-5">Fusion 360</span></p>
                    </Col>
                </Row>
            </Container>
                
            
        </section>
    )
}

export default Hero;