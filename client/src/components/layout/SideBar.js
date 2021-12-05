import React, { useEffect } from "react";
import "./SideBar.css";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const SideBar = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user, isAuthenticated },
  logout,
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img src={user && user.avatar} />
            <h3>{user && user.name}</h3>
          </div>
          <ul>
            <li>
              <Link to="/dashboard">
                <span className="item-nav">Home</span>
              </Link>
            </li>

            <li>
              <a href="#">
                <span className="item-nav">Forum</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="item-nav">Match</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item-nav">Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item-nav">Filtered Search</span>
              </a>
            </li>
            <li>
              <Link to="/profiles">
                <span className="item-nav">All Profiles</span>
              </Link>
            </li>
            <li>
              <a onClick={logout} href="#!">
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, logout })(SideBar);
