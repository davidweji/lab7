import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar">
            <div className="nav-items fw-bold">
                <ul className="nav">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;