import React, { useState, createRef, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import './Auth.css'


function SignIn() {

    const emailRef = createRef();
    const passwordRef = createRef();

    const Navigate = useNavigate()

    const [data, setData] = useState()
    const [inputData, setInputData] = useState()



    useEffect(() => {
        const d = JSON.parse(localStorage.getItem('inputData'))
        setInputData(d)
    }, [])

    const OnchangeData = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const reference = () => {
        emailRef.current.value = ''
        passwordRef.current.value = ''
    }

    const submitData = (e) => {
        e.preventDefault()
        if(!inputData){
            toast.error("You are not an existing user please signup")
        }else{
            if (inputData.name !== data.name) {
                toast.error("Please enter correct name")
            } else {
                if (data.password !== inputData.password) {
                    toast.error("Incorrect password")
                } else {
                    reference()
                    localStorage.setItem('Items',JSON.stringify(data))
                    Navigate('/sample')
                }
        }       
        }
    }

    return (
        <div className='form_container'>
            <ToastContainer />
            <div className='form_signin'>
                <div className='form_title'><h1>Sign In</h1></div>
                <div className='form_inputs'>
                    <Form onSubmit={submitData} className='form-main'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={OnchangeData} ref={emailRef} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={OnchangeData} ref={passwordRef} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className='form_link'>
                    <p>New User ? Please <a href='/'>Signup</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn