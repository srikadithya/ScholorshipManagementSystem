import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipImage from '../assets/scholarship.png'; // Adjust path based on your file structure
import './Navbar.css'; // Assuming you're using the same CSS file for styling

const PostLoginNavbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <img src={ScholarshipImage} alt="Scholarship Logo" className="navbar-logo" />
      
      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/search">Search</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/track">Track</Link>
      </div>
    </div>
  );
};

export default PostLoginNavbar;
