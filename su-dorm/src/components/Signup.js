import React, { Component, useState } from 'react'
import './Signup.css';
import { Button, Input, Form, FormText, FormGroup, Label, Alert } from 'reactstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Signup() {

   
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (email === "" || password === ""|| name === ""||  surname === "") {
            setError("Fields are required");
            return;
        }
        else{
            setError("");
            return;
        }
    };


    return (
        <div>
            <div className="signup-container">
                <div className="form-content">
                    <h1>Signup</h1>
                    {error &&<Alert color="danger">
                        {error}
                    </Alert>}
                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for="exampleName">
                                Name
                            </Label>
                            <Input

                                id="exampleName"
                                name="name"
                                placeholder="Name"
                                type="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSurname">
                                Surname
                            </Label>
                            <Input

                                id="exampleSurname"
                                name="surname"
                                placeholder="Surname"
                                type="surname"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                        </FormGroup>
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
                            Register
                        </Button>
                        <Label className="login-account-label"> <Link to="/">Already have an account?</Link></Label>

                    </Form>
                </div>
            </div >
        </div>
    )
}

