import React, {useState} from 'react'
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {LoginRegister} from '../login/login'
import img from '../../public/assets/site-design-pics/rdp_trans_logo.png'
import Link from 'next/link'


const NavBar=()=> {
    const expand = 'lg';
    const [register, setRegister]= useState(false);
    const [login, setLogin] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);

    function openRegisterModal(){
        setRegister(true);
    }

    const closeRegisterModal= ()=>{
        setRegister(false);
    }

    const openLoginModal = ()=>{
        setLogin(true);
    }

    const closeLoginModal = ()=>{
        setLogin(false);
    }

    const openResetModal = ()=>{
        setResetPassword(true);
    }
    const closeResetModal = ()=>{
        setResetPassword(false)
    }

  return (
    <section className=' ' >
        <Navbar key={expand} bg="dark" variant= "dark" expand={expand} fixed="top">
          <Container fluid className=' mx-md-1 mx-xl-3 mx-xxl-5'>
            <Link href="/"><Navbar.Brand href="/index"><Image src={img} height={70} width={70}/></Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="py-1 bg-primary fs-5">
                Menu
              </Offcanvas.Header>
              <Offcanvas.Body className='py-1 bg-dark text-white'>
                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                <Link href="/electronics"><Nav.Link href="electronics">Electronic</Nav.Link></Link>
                  <Link href="/react"><Nav.Link href="/react">React</Nav.Link></Link>
                  <Link href="/python"><Nav.Link href="python">Python</Nav.Link></Link>
                  <Link href="/wordpress"><Nav.Link href="wordpress">WordPress</Nav.Link></Link>
                  <Link href="/cplusplus"><Nav.Link href="cplusplus">C++</Nav.Link></Link>
                  <Link href="../../pages/react.js"><Nav.Link >Fusion</Nav.Link></Link>
                  <Link href="../../pages/react.js"><Nav.Link >Blog</Nav.Link></Link>
                  
                  
                  <div className='d-flex py-1'>
                  <Button className='ms-2  ' variant='outline-primary' onClick={openLoginModal}>Login</Button>
                  <Button className='ms-2 ' onClick={openRegisterModal}>SignUp</Button>
                  </div>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 bg-secondary text-white"
                    aria-label="Search"
                  />
                  <Button className=""variant="outline-primary">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <LoginRegister 
        register={register} 
        openRegister={openRegisterModal}
        closeRegister={closeRegisterModal}
        login={login}
        openLogin={openLoginModal}
        closeLogin={closeLoginModal}
        reset={resetPassword}
        openReset={openResetModal}
        closeReset={closeResetModal}
        />
        
    </section>
  );
}

export default NavBar;