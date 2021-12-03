import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Fragment>
          <section className="container">
            <Alert />
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </section>
        </Fragment>
      </Routes>
    </Router>
  </Provider>
);

export default App;
