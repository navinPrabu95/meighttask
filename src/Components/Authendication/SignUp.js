import React, { useState, createRef } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Proffession from '../ProfessionList/Profession';
import {useNavigate} from 'react-router-dom'
import './Auth.css'
// toast.configure()

function Signup() {

    const [data, setData] = useState()

    const Navigate = useNavigate()


    const emailRef = createRef();
    const passwordRef = createRef();
    const userNameRef = createRef();
    const mobNoRef = createRef();

    const onChangeData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const reference = () => {
        emailRef.current.value = ''
        passwordRef.current.value = ''
        userNameRef.current.value = ''
        mobNoRef.current.value = ''
    }

    const onSubmitData = (e) => {

        e.preventDefault();
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (!reg.test(String(data.email))) {

            toast.error("Invalid Email Format",
                    {position:toast.POSITION.TOP_CENTER,className: 'toast-message-error'})

        } else {
            const regPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

            if (!regPass.test(String(data.password))) {
                toast.error("password characteristics failed",
                    {position:toast.POSITION.TOP_CENTER,className: 'toast-message-error'})

            } else {
                localStorage.setItem('inputData', JSON.stringify(data))
                Navigate('/signin')
                toast.success("User created sucessfully",
                {position:toast.POSITION.TOP_CENTER,className: 'toast-message-sucess'})
            }
        }
        reference()
    }
    return (
        <div className='form_container'>
            <ToastContainer />
            <div className='form_signup'>
                <div className='form_title'><h1>Sign Up</h1></div>
                <div className='form_inputs'>
                    <Form onSubmit={onSubmitData} className='form-main'>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter userName" name='name' onChange={onChangeData} ref={userNameRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' onChange={onChangeData} ref={passwordRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChangeData} ref={emailRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" placeholder="(000) 000 0000" name='mobNo' onChange={onChangeData} ref={mobNoRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Profession</Form.Label>
                            <Form.Select aria-label="Default select example" name='profession' id="formInput" className='select_form' onChange={onChangeData}>
                                <option>Select Proffession</option>
                                {
                                    Proffession.map((val, i) => {
                                        return <option key={i} value={val}>{val}</option>
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='form_link'>
                    <p>Existing User ? Please <a href='/signin'>SignIn</a></p>
                </div>
            </div>


        </div>
    )
}

export default Signup