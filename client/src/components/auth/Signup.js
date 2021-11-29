import React, { useState } from "react";
import "./Signup.css";
import { Button, Input, Form, FormGroup, Label } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

export const SignUp = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  if (isAuthenticated) {
    return console.log("yekta");
  }
  return (
    <div>
      <div className="signup-container">
        <div className="form-content">
          <h1>Signup</h1>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                id="exampleName"
                name="name"
                placeholder="Name"
                type="name"
                value={name}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="example@example.com"
                type="email"
                value={email}
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={onChange}
              />
            </FormGroup>
            <Button className="login-btn" type="submit" color="primary">
              Register
            </Button>
            <Label className="login-account-label">
              {" "}
              <Link to="/">Already have an account?</Link>
            </Label>
          </Form>
        </div>
      </div>
    </div>
  );
};

// export default SignUp;

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
