import React from 'react'
import './SideBar.css';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
                        <li className="list-item-nav">
                            <a className="nav-item-link" href="/profile" >
                                <span className="item-nav">Home</span>
                            </a>
                        </li>
                        
                        <li className="list-item-nav">
                            <a className="nav-item-link" href="/preferences">
                                <span className="item-nav">Preferences</span>
                            </a>
                        </li>
                        
                        <li className="list-item-nav">
                            <a className="nav-item-link" href="/match">
                                <span className="item-nav">Match</span>
                            </a>
                        </li>
                        <li className="list-item-nav">
                            <a className="nav-item-link" href="/settings">
                                <span className="item-nav">Settings</span>
                            </a>
                        </li>
                        <li className="list-item-nav">
                            <a className="nav-item-link" href="#">
                                <span className="item-nav">Filtered Search</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
