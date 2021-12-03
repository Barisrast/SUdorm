import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

const App = () => (
  <Router>
    <Routes>
      <Fragment>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Fragment>
    </Routes>
  </Router>
);

export default App;
