import React, { Component, useState } from 'react';
import './Login.css';
import { Button, Input, Form, FormText, FormGroup, Label, Alert } from 'reactstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



export default function Login() {
    // state = {
    //     email: '',
    //     password: '',
    //     error: ''
    // }
    // onNameChange = (e) => {
    //     const name = e.target.value;
    //     this.setState(() => ({ name }))
    // }
    // onSurnameChange = (e) => {
    //     const surname = e.target.value;
    //     this.setState(() => ({ surname }))
    // }
    // onEmailChange = (e) => {
    //     const email = e.target.value;
    //     this.setState(() => ({ email }))
    // }
    // onPasswordChange = (e) => {
    //     const password = e.target.value;
    //     this.setState(() => ({ password }))
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();

    //     if (!this.state.email || !this.state.password) {

    //         this.setState({ error: "Please fill in all the blanks..." })
    //     }else{
    //         this.setState({ error: "" })
    //     }


    // }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }
        else {
            setError("");
            return;
        }
    };


    return (
        <div className="login-container">
            <div className="form-content">
                <h1>Login</h1>
                {error && <Alert color="danger">
                    {error}
                </Alert>}
                <Form onSubmit={submitForm}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="example@example.com"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button className="login-btn"
                        type="submit"
                        color="primary"
                    >
                        Login
                    </Button>
                    <Label className="create-account-label"> <Link to="/signup">Create an account</Link></Label>

                </Form>
            </div>
        </div >
    );
}


