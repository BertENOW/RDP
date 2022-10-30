import {Modal, Form, Button} from 'react-bootstrap'
import React, {useState} from 'react'
import { GetCurrentDate, Register, Login, ValidateEmail} from '../utils/utils';
import { addOrUpdateData, getData, GetUser } from '../../pages/api/login';
// import {hash} from 'bcrypt'
import Axios from 'axios'



export const LoginRegister = (props)=>{
    const openResetFromLogin=()=>{
        props.closeLogin();
        props.openReset();
    }
    const openLoginFromRegister = ()=>{
        props.closeRegister();
        props.openLogin();
    }
    const openLoginFromReset=()=>{
        props.closeReset();
        props.openLogin();
    }
    const openRegisterFromReset=()=>{
        props.closeReset();
        props.openRegister();
    }

    const [firstNameReg, setFisrtNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const registerUrl = "http://localhost:3000/api/register"
    const loginUrl = "http://localhost:3000/api/login"
    const user ={}
    // const register=()=>{
    //     if(ValidateEmail(emailReg)){
    //         Register(registerUrl, emailReg, passwordReg, 
    //             firstNameReg, lastNameReg, GetCurrentDate())
    //     }else(console.log("Wrong email format"))
    // }
    const Register=(url, emailReg, passwordReg, firstNameReg, lastNameReg, today)=>{
        Axios.post(url, {
        email:emailReg,
        password:passwordReg,
        firstName:firstNameReg,
        lastName:lastNameReg,
        dateCreated:today
        }).then((res)=>{
            console.log(res)
            return res
            
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    const data = {}
    const login = ()=>{
        if(ValidateEmail(emailLogin)){
            Login(loginUrl, emailLogin, passwordLogin)
        }else(console.log("Wrong email format"))
        
    }
    return(
        <>
             {/* Register modal */}
            <Modal show={props.register} onHide={props.closeRegister}>
            <Modal.Header closeButton className='bg-primary py-2 ' variant="">
                <h2>Sign Up</h2>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
                <Form>
                    <Form.Group className="mb-1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="input" placeholder="First Name" autoFocus
                        onChange={(e)=>setFisrtNameReg(e.target.value)}
                        className="bg-secondary text-white"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="input" placeholder="Last Name" autoFocus
                        onChange={(e)=>setLastNameReg(e.target.value)}
                        className="bg-secondary text-white"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Email ddress</Form.Label>
                        <Form.Control type="email" placeholder="example@domain.com" required=""
                        onChange={(e)=>setEmailReg(e.target.value)}
                        className="bg-secondary text-white"/>
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required="" 
                        onChange={(e)=>setPasswordReg(e.target.value)}
                        className="bg-secondary text-white"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="m-foot bg-dark text-white">
                <p>Already have an account? <a href="#hi" onClick={openLoginFromRegister}>Login</a></p>
                <Button variant = "primary" onClick={Register}>Sign Up</Button>
            </Modal.Footer>
        </Modal>

        {/* login modal */}
        <Modal show={props.login} onHide={props.closeLogin}>
            <Modal.Header closeButton className='bg-primary'>
                <h2>Login</h2>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control  className="bg-secondary text-white" type="email" 
                        placeholder="example@type.com" required=""
                        onChange={(e)=>setEmailLogin(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required=""
                         className="bg-secondary text-white"
                         onChange={(e)=>setPasswordLogin(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer  className="bg-dark text-white">
                <p>Forgot your password? <a href="#h" onClick={openResetFromLogin}>Reset Password</a></p>
                <Button variant="primary" onClick={login}>Login</Button>
            </Modal.Footer>
        </Modal>
        
        {/* modal to reset password  */}
        <Modal show={props.reset} onHide={props.closeReset}>
            <Modal.Header closeButton className='bg-dark text-white'>
                <h2>Reset Password</h2>
            </Modal.Header>
            <Modal.Body  className="bg-secondary text-white">
                <Form>
                    <Form.Group >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" required="" placeholder="example@prov.com"/>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <p className='me-3'><a href="##" onClick={openRegisterFromReset}>Sign Up </a></p>
                    <p><a href="##" onClick={openLoginFromReset}>Login</a></p>
                    <Button>Reset Password</Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal>
        </>
        
    )
    
}
