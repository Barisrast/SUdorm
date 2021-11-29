import React, { Component, useState, useEffect } from 'react';
import './Login.css';
import { Button, Input, Form, FormText, FormGroup, Label, Alert } from 'reactstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('api/auth', requestOptions)
            .then(response => response.json())
    }, []);

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