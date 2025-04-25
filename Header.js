import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png"; // Import the logo image

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/ShowProduct">products</Link>
          </li>
          <li>
            <Link to="/staffdetails">Contact</Link>
          </li>
          <li>
            <Link to="/feedbackform">Feedback</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
