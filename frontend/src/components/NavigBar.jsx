import React from 'react';
import logo from "../images/Pixdio.png";
import { Link } from 'react-router-dom';
import "../styles/NavigBar.css";

function NavigBar() {
  return (
    <nav>
      <div className="navbar-logo">
        {/* Replace 'logo.png' with the path to your company logo */}
        <img src={logo} alt="Company Logo" />
        <span className="company-name">PIXDIO</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigBar