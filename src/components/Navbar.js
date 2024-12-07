import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipImage from '../assets/scholarship.png'; // Adjust the path based on your file structure
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src={ScholarshipImage} alt="Scholarship Logo" className="navbar-logo" />
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/adminauth">Adminmodule</Link>
      </div>

      <div className="nav-links">
        <Link to="/authpage">SignUp/login</Link>
      </div>
    </div>
  );
};

export default Navbar;
