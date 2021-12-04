import React from "react";
import "./SideBar.css";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="sidebar">
          <div className="profile">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h3>NAME SURNAME</h3>
          </div>
          <ul>
            <li>
              <a href="#">
                <span className="item-nav">Home</span>
              </a>
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
          </ul>
        </div>
      </div>
    </div>
  );
}
