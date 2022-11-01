import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <header className="nav__bg">
            <div className="container">
                <nav className="navbar navbar-expand-sm">
                    <NavLink className="navbar-brand" to="/home">
                        <img
                            className="img-fluid"
                            src="../../logo3.png"
                            alt=""
                        />
                    </NavLink>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse ml-5"
                        id="collapsibleNavId"
                    >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cinema">
                                    Cinema
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <span>
                            Login
                            <span> /</span>
                            <span> Register</span>
                        </span>
                    </div>
                </nav>
            </div>
        </header>
    );
}
