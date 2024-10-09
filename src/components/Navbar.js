// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipImage from '../assets/scholarship.png'; // Adjust the path based on your file structure
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={ScholarshipImage} alt="Scholarship Logo" className="navbar-logo" />
      <div className="nav-link">
        <Link to="/search">Search</Link>
      </div>
      <div className="nav-link">
        <Link to="/apply">Apply</Link>
      </div>
      
      <div className="nav-link">
        <Link to="/track">Track</Link>
      </div>
      
      
      <div className="nav-link">
        <Link to="/">Signup/login</Link>
      </div>
    </div>
  );
};

export default Navbar;
