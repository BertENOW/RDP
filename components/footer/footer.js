import {Row, Col, Form, Button} from 'react-bootstrap'
import Image from 'next/image'
import logo from '../../public/assets/site-design-pics/rdp_trans_logo.png'
import Link from 'next/link'
import useScript from '../../hooks/useScript'

const Footer = ()=>{
    useScript('https://kit.fontawesome.com/d0214f6932.js')
    return (
        <div className='bg-dark border-top border-secondary '>
            <Row className=' mx-sm-1 mx-md-1 mx-xl-3 mx-xxl-5 my-5'>
                <Col sm={12} xl={6} className="my-5">
                    <Link href="/"><a><Image src={logo} height={60} width={60}/></a></Link>
                    <p className='fw7 text-white'>Keep up to date</p>
                    <p className='fw7 text-muted'>Join our newletter for regular updates. </p>

                    <Form>
                        <Form.Label className='text-white'>Eneter email address</Form.Label>
                        <Form.Group className="mb-1 d-flex">
                            <Form.Control type="email" placeholder="example@xmail.com" required="" className='w-50 me-2 bg-secondary text-white'/>
                            <Button variant = "primary">Subscribe</Button>
                        </Form.Group>
                    </Form>

                </Col>

                <Col sm={6} xl={3} className="mb-5">
                    <p className='white fw7 fs-5'>Categories</p>
                    <div className='text-muted d-flex flex-column fw5'>
                        <Link href='/electronics'><a >Electronics</a></Link>
                        <Link href='/react'><a >React</a></Link>
                        <Link href='/cplusplus'><a >C++</a></Link>
                        <Link href='/python'><a >Python</a></Link>
                        <Link href='/wordpress'><a >WordPress</a></Link>
                        <Link href='/fusion'><a >Electronics</a></Link>
                    </div>

                </Col>

                <Col sm={6} xl={3}>
                <p className='white fw7 fs-5'>Resources</p>
                    <div className='text-muted d-flex flex-column fw5'>
                        <Link href='/electronics'><a >Electronics</a></Link>
                        <Link href='/react'><a >React</a></Link>
                        <Link href='/cplusplus'><a >C++</a></Link>
                        <Link href='/python'><a >Python</a></Link>
                        <Link href='/wordpress'><a >WordPress</a></Link>
                        <Link href='/fusion'><a >Electronics</a></Link>
                    </div>
                </Col>
            </Row>
            <Row className=' mx-sm-1 mx-md-1 mx-xl-3 mx-xxl-5 fw5'>
                <Col sm={12} lg={6} className="text-muted">
                    <p>Copyright © Rainee Day Projects 2022</p>
                </Col>

                <Col sm={12} lg={6} className="text white f2 d-flex">
                    <p className='me-5'><Link href="###"><a><i className="fa-brands fa-linkedin"></i></a></Link></p>
                    <p className='me-5'><Link href="##"><a><i className="fa-brands fa-github"></i></a></Link></p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;